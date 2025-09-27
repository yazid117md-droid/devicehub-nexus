import { useState } from "react";
import { Search, Filter, Plus, Edit, Trash2, Monitor, Smartphone, Laptop } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Mock data for demonstration
const mockDevices = [
  {
    id: "DEV-001",
    employeeName: "John Smith",
    deviceType: "Laptop",
    os: "Windows 11",
    mdmRegistered: true,
    adLinked: true,
    registrationDate: "2024-01-15",
    notes: "Primary development machine",
  },
  {
    id: "DEV-002", 
    employeeName: "Sarah Johnson",
    deviceType: "Mobile",
    os: "iOS 17.2",
    mdmRegistered: true,
    adLinked: false,
    registrationDate: "2024-02-03",
    notes: "Sales team device",
  },
  {
    id: "DEV-003",
    employeeName: "Mike Wilson",
    deviceType: "PC",
    os: "Windows 10",
    mdmRegistered: false,
    adLinked: true,
    registrationDate: "2023-11-20",
    notes: "Legacy system - needs upgrade",
  },
];

const DeviceIcon = ({ type }: { type: string }) => {
  switch (type.toLowerCase()) {
    case 'laptop':
      return <Laptop className="h-4 w-4" />;
    case 'mobile':
      return <Smartphone className="h-4 w-4" />;
    case 'pc':
      return <Monitor className="h-4 w-4" />;
    default:
      return <Monitor className="h-4 w-4" />;
  }
};

const StatusBadge = ({ status, label }: { status: boolean; label: string }) => (
  <Badge variant={status ? "success" : "warning"} className="text-xs">
    {status ? "✓" : "✗"} {label}
  </Badge>
);

export default function DeviceTable() {
  const [searchTerm, setSearchTerm] = useState("");
  const [deviceTypeFilter, setDeviceTypeFilter] = useState("all");
  
  const filteredDevices = mockDevices.filter(device => {
    const matchesSearch = device.employeeName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         device.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = deviceTypeFilter === "all" || device.deviceType.toLowerCase() === deviceTypeFilter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="space-y-6">
      {/* Header Actions */}
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <div className="flex flex-col sm:flex-row gap-4 flex-1">
          <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search devices or employees..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          
          <Select value={deviceTypeFilter} onValueChange={setDeviceTypeFilter}>
            <SelectTrigger className="w-[180px]">
              <Filter className="h-4 w-4 mr-2" />
              <SelectValue placeholder="Device Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Devices</SelectItem>
              <SelectItem value="laptop">Laptops</SelectItem>
              <SelectItem value="pc">PCs</SelectItem>
              <SelectItem value="mobile">Mobile</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <Button variant="default" className="bg-gradient-primary hover:bg-primary-hover">
          <Plus className="h-4 w-4 mr-2" />
          Add Device
        </Button>
      </div>

      {/* Device Table */}
      <Card className="shadow-medium">
        <CardHeader>
          <CardTitle className="text-xl">Device Inventory</CardTitle>
          <CardDescription>
            Manage and monitor all company devices ({filteredDevices.length} devices)
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="rounded-lg border overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow className="bg-muted/50">
                  <TableHead>Employee</TableHead>
                  <TableHead>Device ID</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>OS</TableHead>
                  <TableHead>MDM Status</TableHead>
                  <TableHead>AD Status</TableHead>
                  <TableHead>Registration</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredDevices.map((device) => (
                  <TableRow key={device.id} className="hover:bg-muted/30 transition-colors">
                    <TableCell className="font-medium">{device.employeeName}</TableCell>
                    <TableCell className="font-mono text-sm">{device.id}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <DeviceIcon type={device.deviceType} />
                        {device.deviceType}
                      </div>
                    </TableCell>
                    <TableCell>{device.os}</TableCell>
                    <TableCell>
                      <StatusBadge status={device.mdmRegistered} label="MDM" />
                    </TableCell>
                    <TableCell>
                      <StatusBadge status={device.adLinked} label="AD" />
                    </TableCell>
                    <TableCell className="text-sm text-muted-foreground">
                      {new Date(device.registrationDate).toLocaleDateString()}
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Button variant="ghost" size="sm">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}