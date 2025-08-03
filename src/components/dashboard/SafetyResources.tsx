import { BookOpen, ExternalLink, Phone, Video, Download } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function SafetyResources() {
  const resources = [
    {
      icon: Phone,
      title: "Emergency Hotlines",
      description: "Text-based emergency services",
      items: [
        "Crisis Text Line: Text HOME to 741741",
        "Deaf Hotline: VP 855-812-1001",
        "National DV Hotline: Text START to 88788"
      ]
    },
    {
      icon: Video,
      title: "Sign Language Support",
      description: "ASL interpretation services",
      items: [
        "Video Relay Service (VRS)",
        "Emergency ASL Interpreters",
        "Legal Support in ASL"
      ]
    },
    {
      icon: BookOpen,
      title: "Safety Planning",
      description: "Resources for personal safety",
      items: [
        "Creating Your Safety Plan",
        "Digital Evidence Collection",
        "Emergency Kit Preparation"
      ]
    }
  ];

  const emergencyGuides = [
    "Quick Start Guide",
    "Emergency Procedures",
    "Technology Setup",
    "Contact Management"
  ];

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-2">
          <BookOpen className="h-5 w-5 text-primary" />
          <CardTitle>Safety Resources</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Resource Categories */}
        <div className="grid grid-cols-1 gap-4">
          {resources.map((resource, index) => (
            <div key={index} className="p-4 rounded-lg bg-muted/50">
              <div className="flex items-center gap-2 mb-2">
                <resource.icon className="h-4 w-4 text-primary" />
                <h4 className="font-medium">{resource.title}</h4>
              </div>
              <p className="text-sm text-muted-foreground mb-3">{resource.description}</p>
              <ul className="space-y-1">
                {resource.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-sm flex items-center gap-2">
                    <div className="w-1 h-1 bg-primary rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Emergency Guides */}
        <div>
          <h4 className="text-sm font-medium mb-3">Emergency Guides</h4>
          <div className="space-y-2">
            {emergencyGuides.map((guide, index) => (
              <Button
                key={index}
                variant="outline"
                className="w-full justify-between"
                size="sm"
              >
                <span>{guide}</span>
                <div className="flex items-center gap-1">
                  <Download className="h-3 w-3" />
                  <ExternalLink className="h-3 w-3" />
                </div>
              </Button>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="flex-1">
            <Phone className="h-4 w-4 mr-2" />
            Call Support
          </Button>
          <Button variant="outline" size="sm" className="flex-1">
            <Video className="h-4 w-4 mr-2" />
            ASL Help
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}