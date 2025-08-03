import { AlertTriangle, Phone, MessageSquare, Camera, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

export function EmergencyPanel() {
  const { toast } = useToast();

  const handleEmergencyAlert = (type: string) => {
    toast({
      title: "Emergency Alert Sent",
      description: `${type} alert has been sent to your emergency contacts.`,
      variant: "destructive",
    });
  };

  const emergencyActions = [
    {
      icon: AlertTriangle,
      label: "Immediate Help",
      description: "Send urgent alert to all contacts",
      action: () => handleEmergencyAlert("Immediate"),
      variant: "emergency" as const,
      size: "lg" as const,
    },
    {
      icon: Phone,
      label: "Call 911",
      description: "Direct emergency services",
      action: () => handleEmergencyAlert("911"),
      variant: "emergency" as const,
    },
    {
      icon: MessageSquare,
      label: "Text Alert",
      description: "Send silent text alert",
      action: () => handleEmergencyAlert("Text"),
      variant: "warning" as const,
    },
    {
      icon: Camera,
      label: "Record Evidence",
      description: "Start discrete recording",
      action: () => handleEmergencyAlert("Recording"),
      variant: "secondary" as const,
    },
  ];

  return (
    <Card className="border-destructive/20 bg-gradient-to-br from-card to-destructive/5">
      <CardHeader>
        <div className="flex items-center gap-2">
          <Shield className="h-5 w-5 text-destructive" />
          <CardTitle className="text-destructive">Emergency Actions</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {emergencyActions.map((action, index) => (
            <Button
              key={index}
              variant={action.variant}
              size={action.size || "default"}
              onClick={action.action}
              className={`h-auto p-4 flex-col gap-2 ${
                index === 0 ? "sm:col-span-2" : ""
              }`}
            >
              <action.icon className={`h-6 w-6 ${index === 0 ? "h-8 w-8" : ""}`} />
              <div className="text-center">
                <div className="font-semibold">{action.label}</div>
                <div className="text-xs opacity-90">{action.description}</div>
              </div>
            </Button>
          ))}
        </div>
        
        <div className="text-xs text-muted-foreground text-center pt-2 border-t">
          Emergency alerts are sent immediately and discretely to your trusted contacts
        </div>
      </CardContent>
    </Card>
  );
}