import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Monitor, Smartphone, Laptop, Shield, Users, AlertTriangle } from "lucide-react";

const StatCard = ({ 
  title, 
  value, 
  icon: Icon, 
  description,
  trend 
}: { 
  title: string; 
  value: string; 
  icon: any; 
  description: string;
  trend?: string;
}) => (
  <Card className="shadow-soft">
    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
      <CardTitle className="text-sm font-medium text-muted-foreground">{title}</CardTitle>
      <Icon className="h-4 w-4 text-primary" />
    </CardHeader>
    <CardContent>
      <div className="text-2xl font-bold">{value}</div>
      <p className="text-xs text-muted-foreground mt-1">{description}</p>
      {trend && (
        <p className="text-xs text-success mt-1">↗ {trend}</p>
      )}
    </CardContent>
  </Card>
);

export default function DeviceStats() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <StatCard
        title="Total Devices"
        value="247"
        icon={Monitor}
        description="All registered devices"
        trend="+12 this month"
      />
      
      <StatCard
        title="MDM Enrolled"
        value="198"
        icon={Shield}
        description="80% compliance rate"
        trend="+8% from last month"
      />
      
      <StatCard
        title="Active Users"
        value="156"
        icon={Users}
        description="Employees with devices"
      />
      
      <StatCard
        title="Alerts"
        value="5"
        icon={AlertTriangle}
        description="Require attention"
      />
    </div>
  );
}