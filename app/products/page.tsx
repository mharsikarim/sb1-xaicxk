import { DashboardShell } from '@/components/ui/dashboard-shell';

export default function ProductsPage() {
  return (
    <DashboardShell>
      <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
        <h1 className="text-3xl font-bold">Products</h1>
        <p>Product management page content goes here.</p>
      </div>
    </DashboardShell>
  );
}