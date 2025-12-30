import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FolderOpen,
  MessageSquare,
  Briefcase,
  FileText,
  BarChart3,
  Mail,
  ArrowRight,
} from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

interface Stats {
  projects: number;
  testimonials: number;
  services: number;
  blogPosts: number;
  inquiries: number;
}

const Dashboard = () => {
  const [stats, setStats] = useState<Stats>({
    projects: 0,
    testimonials: 0,
    services: 0,
    blogPosts: 0,
    inquiries: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const [projects, testimonials, services, blogPosts, inquiries] =
          await Promise.all([
            supabase.from("projects").select("id", { count: "exact", head: true }),
            supabase.from("testimonials").select("id", { count: "exact", head: true }),
            supabase.from("services").select("id", { count: "exact", head: true }),
            supabase.from("blog_posts").select("id", { count: "exact", head: true }),
            supabase.from("contact_inquiries").select("id", { count: "exact", head: true }),
          ]);

        setStats({
          projects: projects.count || 0,
          testimonials: testimonials.count || 0,
          services: services.count || 0,
          blogPosts: blogPosts.count || 0,
          inquiries: inquiries.count || 0,
        });
      } catch (error) {
        console.error("Error fetching stats:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  const statCards = [
    {
      label: "Projects",
      value: stats.projects,
      icon: FolderOpen,
      path: "/admin/projects",
      color: "from-primary to-primary/50",
    },
    {
      label: "Testimonials",
      value: stats.testimonials,
      icon: MessageSquare,
      path: "/admin/testimonials",
      color: "from-accent to-accent/50",
    },
    {
      label: "Services",
      value: stats.services,
      icon: Briefcase,
      path: "/admin/services",
      color: "from-primary to-accent",
    },
    {
      label: "Blog Posts",
      value: stats.blogPosts,
      icon: FileText,
      path: "/admin/blog",
      color: "from-accent to-primary",
    },
    {
      label: "Inquiries",
      value: stats.inquiries,
      icon: Mail,
      path: "/admin",
      color: "from-primary/80 to-accent/80",
    },
  ];

  const quickLinks = [
    { label: "Add New Project", path: "/admin/projects", icon: FolderOpen },
    { label: "Add Testimonial", path: "/admin/testimonials", icon: MessageSquare },
    { label: "Update Services", path: "/admin/services", icon: Briefcase },
    { label: "Write Blog Post", path: "/admin/blog", icon: FileText },
    { label: "Edit Site Stats", path: "/admin/stats", icon: BarChart3 },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
        <p className="text-muted-foreground mt-1">
          Welcome to your admin dashboard
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {statCards.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Link
              to={stat.path}
              className="block bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-colors group"
            >
              <div
                className={`w-12 h-12 rounded-lg bg-gradient-to-br ${stat.color} flex items-center justify-center mb-4`}
              >
                <stat.icon className="w-6 h-6 text-background" />
              </div>
              <p className="text-3xl font-bold text-foreground">
                {loading ? "..." : stat.value}
              </p>
              <p className="text-muted-foreground text-sm">{stat.label}</p>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="bg-card border border-border rounded-xl p-6">
        <h2 className="text-xl font-semibold text-foreground mb-4">
          Quick Actions
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
          {quickLinks.map((link) => (
            <Link
              key={link.label}
              to={link.path}
              className="flex items-center gap-3 px-4 py-3 rounded-lg bg-muted/50 hover:bg-primary/10 hover:text-primary transition-colors group"
            >
              <link.icon className="w-5 h-5" />
              <span className="font-medium text-sm">{link.label}</span>
              <ArrowRight className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
