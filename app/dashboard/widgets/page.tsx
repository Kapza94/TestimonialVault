import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function WidgetsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Widgets</h1>
        <Button>Create Widget</Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Homepage Testimonials</CardTitle>
            <CardDescription>Carousel widget for the homepage</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-green-500" />
                <span className="text-sm">Active</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">5 testimonials</span>
                <Button variant="outline" size="sm">
                  Get Code
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-dashed">
          <CardHeader>
            <CardTitle className="text-muted-foreground">Create a widget</CardTitle>
            <CardDescription>
              Choose from different widget styles and customize them
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
    </div>
  );
}
