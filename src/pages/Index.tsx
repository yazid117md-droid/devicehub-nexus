import { Monitor, Database, Users, Settings, FileText, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import DeviceStats from "@/components/DeviceStats";
import DeviceTable from "@/components/DeviceTable";
import heroImage from "@/assets/hero-devices.jpg";

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Header */}
      <header className="border-b bg-card/95 backdrop-blur-sm shadow-soft sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <Monitor className="h-5 w-5 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold">Device Management</h1>
                <p className="text-sm text-muted-foreground">Enterprise Asset Control</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <Button variant="outline" size="sm">
                <FileText className="h-4 w-4 mr-2" />
                Export
              </Button>
              <Button variant="outline" size="sm">
                <Download className="h-4 w-4 mr-2" />
                Reports
              </Button>
              <Button variant="outline" size="sm">
                <Settings className="h-4 w-4 mr-2" />
                Settings
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-primary text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: `url(${heroImage})` }}
        ></div>
        <div className="relative container mx-auto px-4 py-16">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-bold mb-4">
              Centralized Device Management
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Monitor, secure, and manage all company devices from a single, powerful dashboard. 
              Track compliance, enforce policies, and maintain complete visibility across your IT infrastructure.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg">
                <Database className="h-5 w-5" />
                <span>MDM Integration</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg">
                <Users className="h-5 w-5" />
                <span>Active Directory</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg">
                <Monitor className="h-5 w-5" />
                <span>Multi-Platform</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 space-y-8">
        {/* Statistics Overview */}
        <section>
          <h3 className="text-2xl font-semibold mb-6">Overview</h3>
          <DeviceStats />
        </section>

        {/* Device Management Table */}
        <section>
          <DeviceTable />
        </section>

        {/* Quick Actions */}
        <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="bg-card p-6 rounded-lg shadow-soft">
            <h4 className="font-semibold mb-2 flex items-center gap-2">
              <Monitor className="h-5 w-5 text-primary" />
              Device Enrollment
            </h4>
            <p className="text-sm text-muted-foreground mb-4">
              Add new devices to your managed inventory
            </p>
            <Button variant="outline" className="w-full">
              Enroll Device
            </Button>
          </div>

          <div className="bg-card p-6 rounded-lg shadow-soft">
            <h4 className="font-semibold mb-2 flex items-center gap-2">
              <Users className="h-5 w-5 text-primary" />
              User Management
            </h4>
            <p className="text-sm text-muted-foreground mb-4">
              Manage employee device assignments
            </p>
            <Button variant="outline" className="w-full">
              Manage Users
            </Button>
          </div>

          <div className="bg-card p-6 rounded-lg shadow-soft">
            <h4 className="font-semibold mb-2 flex items-center gap-2">
              <FileText className="h-5 w-5 text-primary" />
              Compliance Reports
            </h4>
            <p className="text-sm text-muted-foreground mb-4">
              Generate detailed compliance reports
            </p>
            <Button variant="outline" className="w-full">
              View Reports
            </Button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-card border-t mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-3 mb-4 md:mb-0">
              <div className="h-6 w-6 bg-gradient-primary rounded flex items-center justify-center">
                <Monitor className="h-4 w-4 text-white" />
              </div>
              <span className="font-semibold">Device Management Portal</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Secure • Compliant • Efficient
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}