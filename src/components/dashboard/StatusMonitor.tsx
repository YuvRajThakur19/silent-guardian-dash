import { Eye, Brain, Mic, Camera, Activity } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import aiMonitorIcon from "@/assets/ai-monitor-icon.png";

export function StatusMonitor() {
  const monitoringStats = [
    {
      icon: Brain,
      label: "AI Detection",
      status: "Active",
      confidence: 98,
      color: "success",
    },
    {
      icon: Eye,
      label: "Visual Monitoring",
      status: "Online",
      confidence: 95,
      color: "success",
    },
    {
      icon: Mic,
      label: "Audio Analysis",
      status: "Learning",
      confidence: 87,
      color: "warning",
    },
    {
      icon: Camera,
      label: "Camera Feed",
      status: "Connected",
      confidence: 92,
      color: "success",
    },
  ];

  const getStatusColor = (color: string) => {
    switch (color) {
      case "success":
        return "text-success";
      case "warning":
        return "text-warning";
      default:
        return "text-muted-foreground";
    }
  };

  const getProgressColor = (color: string) => {
    switch (color) {
      case "success":
        return "bg-success";
      case "warning":
        return "bg-warning";
      default:
        return "bg-muted";
    }
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-2">
          <img src={aiMonitorIcon} alt="AI Monitor" className="w-5 h-5" />
          <CardTitle>AI Monitoring Status</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {monitoringStats.map((stat, index) => (
            <div key={index} className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <stat.icon className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm font-medium">{stat.label}</span>
                </div>
                <span className={`text-xs font-medium ${getStatusColor(stat.color)}`}>
                  {stat.status}
                </span>
              </div>
              <div className="space-y-1">
                <Progress value={stat.confidence} className="h-2" />
                <div className="text-xs text-muted-foreground text-right">
                  {stat.confidence}% confidence
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-muted/50 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <Activity className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium">Recent Activity</span>
          </div>
          <div className="space-y-2 text-xs text-muted-foreground">
            <div className="flex justify-between">
              <span>Environment scan completed</span>
              <span>2 min ago</span>
            </div>
            <div className="flex justify-between">
              <span>Audio pattern analyzed</span>
              <span>5 min ago</span>
            </div>
            <div className="flex justify-between">
              <span>Visual baseline updated</span>
              <span>12 min ago</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}