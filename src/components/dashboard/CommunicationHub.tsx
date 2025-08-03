import { MessageCircle, Users, Bell, Send } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

export function CommunicationHub() {
  const [message, setMessage] = useState("");

  const emergencyContacts = [
    { name: "Family Member", status: "online", lastSeen: "now" },
    { name: "Support Worker", status: "away", lastSeen: "5 min ago" },
    { name: "Emergency Contact", status: "online", lastSeen: "now" },
  ];

  const recentMessages = [
    { from: "Support Worker", message: "Checking in - everything okay?", time: "10:30 AM", unread: false },
    { from: "Family Member", message: "I'll be home at 6 PM", time: "9:45 AM", unread: false },
    { from: "System", message: "Weekly safety check complete", time: "Yesterday", unread: true },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "online":
        return "bg-success";
      case "away":
        return "bg-warning";
      default:
        return "bg-muted";
    }
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <MessageCircle className="h-5 w-5 text-primary" />
            <CardTitle>Communication Hub</CardTitle>
          </div>
          <Badge variant="secondary" className="gap-1">
            <Bell className="h-3 w-3" />
            2 unread
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Emergency Contacts */}
        <div>
          <h4 className="text-sm font-medium mb-3 flex items-center gap-2">
            <Users className="h-4 w-4" />
            Emergency Contacts
          </h4>
          <div className="space-y-2">
            {emergencyContacts.map((contact, index) => (
              <div key={index} className="flex items-center justify-between p-2 rounded-lg bg-muted/50">
                <div className="flex items-center gap-2">
                  <div className={`w-2 h-2 rounded-full ${getStatusColor(contact.status)}`} />
                  <span className="text-sm font-medium">{contact.name}</span>
                </div>
                <span className="text-xs text-muted-foreground">{contact.lastSeen}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Messages */}
        <div>
          <h4 className="text-sm font-medium mb-3">Recent Messages</h4>
          <div className="space-y-2">
            {recentMessages.map((msg, index) => (
              <div key={index} className={`p-3 rounded-lg ${msg.unread ? "bg-primary/5 border border-primary/20" : "bg-muted/50"}`}>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-medium">{msg.from}</span>
                  <span className="text-xs text-muted-foreground">{msg.time}</span>
                </div>
                <p className="text-sm text-muted-foreground">{msg.message}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Message */}
        <div>
          <h4 className="text-sm font-medium mb-3">Send Quick Message</h4>
          <div className="space-y-2">
            <Textarea
              placeholder="Type your message here..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="min-h-20"
            />
            <Button className="w-full" disabled={!message.trim()}>
              <Send className="h-4 w-4 mr-2" />
              Send to All Contacts
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}