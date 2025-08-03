import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { EmergencyPanel } from "@/components/dashboard/EmergencyPanel";
import { StatusMonitor } from "@/components/dashboard/StatusMonitor";
import { CommunicationHub } from "@/components/dashboard/CommunicationHub";
import { SafetyResources } from "@/components/dashboard/SafetyResources";
import heroProtection from "@/assets/hero-protection.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />
      
      {/* Hero Section */}
      <div className="relative h-48 bg-gradient-to-r from-primary to-primary-glow overflow-hidden">
        <img 
          src={heroProtection} 
          alt="Silent Guardian Protection" 
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        <div className="relative z-10 container mx-auto px-6 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-3xl font-bold mb-2">
              Your Safety is Our Priority
            </h1>
            <p className="text-primary-foreground/90 text-lg">
              AI-powered protection designed for deaf and non-verbal communities
            </p>
          </div>
        </div>
      </div>

      {/* Dashboard Content */}
      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Emergency & Status */}
          <div className="space-y-6">
            <EmergencyPanel />
            <StatusMonitor />
          </div>

          {/* Center Column - Communication */}
          <div className="lg:col-span-1">
            <CommunicationHub />
          </div>

          {/* Right Column - Resources */}
          <div className="lg:col-span-1">
            <SafetyResources />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
