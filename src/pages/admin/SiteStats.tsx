import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Plus, Pencil, Trash2, GripVertical } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

interface SiteStat {
  id: string;
  stat_key: string;
  stat_value: string;
  stat_label: string;
  display_order: number;
}

const SiteStats = () => {
  const [stats, setStats] = useState<SiteStat[]>([]);
  const [loading, setLoading] = useState(true);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editingStat, setEditingStat] = useState<SiteStat | null>(null);
  const [formData, setFormData] = useState({
    stat_key: "",
    stat_value: "",
    stat_label: "",
    display_order: 0,
  });

  const fetchStats = async () => {
    try {
      const { data, error } = await supabase
        .from("site_stats")
        .select("*")
        .order("display_order", { ascending: true });

      if (error) throw error;
      setStats(data || []);
    } catch (error: any) {
      toast.error("Failed to fetch stats");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStats();
  }, []);

  const openDialog = (stat?: SiteStat) => {
    if (stat) {
      setEditingStat(stat);
      setFormData({
        stat_key: stat.stat_key,
        stat_value: stat.stat_value,
        stat_label: stat.stat_label,
        display_order: stat.display_order,
      });
    } else {
      setEditingStat(null);
      setFormData({
        stat_key: "",
        stat_value: "",
        stat_label: "",
        display_order: stats.length,
      });
    }
    setDialogOpen(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.stat_key.trim() || !formData.stat_value.trim() || !formData.stat_label.trim()) {
      toast.error("All fields are required");
      return;
    }

    try {
      if (editingStat) {
        const { error } = await supabase
          .from("site_stats")
          .update(formData)
          .eq("id", editingStat.id);

        if (error) throw error;
        toast.success("Stat updated successfully");
      } else {
        const { error } = await supabase.from("site_stats").insert(formData);

        if (error) throw error;
        toast.success("Stat created successfully");
      }

      setDialogOpen(false);
      fetchStats();
    } catch (error: any) {
      if (error.message.includes("duplicate")) {
        toast.error("A stat with this key already exists");
      } else {
        toast.error(error.message || "Failed to save stat");
      }
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this stat?")) return;

    try {
      const { error } = await supabase.from("site_stats").delete().eq("id", id);

      if (error) throw error;
      toast.success("Stat deleted successfully");
      fetchStats();
    } catch (error: any) {
      toast.error("Failed to delete stat");
    }
  };

  const suggestedStats = [
    { key: "years_experience", value: "10+", label: "Years of Experience" },
    { key: "projects_delivered", value: "500+", label: "Projects Delivered" },
    { key: "happy_clients", value: "200+", label: "Happy Clients" },
    { key: "client_satisfaction", value: "98%", label: "Client Satisfaction" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Site Stats</h1>
          <p className="text-muted-foreground mt-1">
            Manage your success metrics and statistics
          </p>
        </div>
        <Button
          onClick={() => openDialog()}
          className="bg-gradient-to-r from-primary to-accent text-background"
        >
          <Plus className="w-4 h-4 mr-2" />
          Add Stat
        </Button>
      </div>

      {loading ? (
        <div className="flex justify-center py-12">
          <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
        </div>
      ) : stats.length === 0 ? (
        <div className="bg-card border border-border rounded-xl p-6">
          <p className="text-muted-foreground text-center mb-6">
            No stats yet. Here are some suggestions:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {suggestedStats.map((stat) => (
              <button
                key={stat.key}
                onClick={() => {
                  setFormData({
                    stat_key: stat.key,
                    stat_value: stat.value,
                    stat_label: stat.label,
                    display_order: 0,
                  });
                  setDialogOpen(true);
                }}
                className="p-4 border border-dashed border-border rounded-lg hover:border-primary/50 hover:bg-primary/5 transition-colors text-left"
              >
                <p className="text-2xl font-bold text-primary">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="bg-card border border-border rounded-xl p-6 group"
            >
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    {stat.stat_value}
                  </p>
                  <p className="text-muted-foreground mt-1">{stat.stat_label}</p>
                  <p className="text-xs text-muted-foreground/50 mt-2">
                    Key: {stat.stat_key}
                  </p>
                </div>
                <GripVertical className="w-4 h-4 text-muted-foreground/30 cursor-grab" />
              </div>
              <div className="flex items-center gap-2 mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => openDialog(stat)}
                >
                  <Pencil className="w-4 h-4 mr-1" />
                  Edit
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleDelete(stat.id)}
                  className="text-destructive hover:bg-destructive hover:text-destructive-foreground"
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      )}

      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              {editingStat ? "Edit Stat" : "Add New Stat"}
            </DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="stat_key">Key (unique identifier) *</Label>
              <Input
                id="stat_key"
                value={formData.stat_key}
                onChange={(e) =>
                  setFormData({ ...formData, stat_key: e.target.value.toLowerCase().replace(/\s+/g, "_") })
                }
                placeholder="e.g. years_experience"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="stat_value">Value *</Label>
              <Input
                id="stat_value"
                value={formData.stat_value}
                onChange={(e) =>
                  setFormData({ ...formData, stat_value: e.target.value })
                }
                placeholder="e.g. 10+"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="stat_label">Label *</Label>
              <Input
                id="stat_label"
                value={formData.stat_label}
                onChange={(e) =>
                  setFormData({ ...formData, stat_label: e.target.value })
                }
                placeholder="e.g. Years of Experience"
              />
            </div>

            <div className="flex justify-end gap-3 pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => setDialogOpen(false)}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                className="bg-gradient-to-r from-primary to-accent text-background"
              >
                {editingStat ? "Update" : "Create"} Stat
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default SiteStats;
