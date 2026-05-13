import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

export default function DashboardTabs() {
  return (
    <div className="space-y-6">

      <Tabs defaultValue="today" className="w-full">

        {/* Header Tabs */}
        <div className="flex justify-end">
          <TabsList className="bg-gray-100 rounded-xl p-1">
            
            <TabsTrigger
              value="today"
              className="rounded-lg px-6 data-[state=active]:bg-orange-500 data-[state=active]:text-white"
            >
              Today
            </TabsTrigger>

            <TabsTrigger
              value="week"
              className="rounded-lg px-6 data-[state=active]:bg-orange-500 data-[state=active]:text-white"
            >
              This Week
            </TabsTrigger>

            <TabsTrigger
              value="month"
              className="rounded-lg px-6 data-[state=active]:bg-orange-500 data-[state=active]:text-white"
            >
              This Month
            </TabsTrigger>

            <TabsTrigger
              value="year"
              className="rounded-lg px-6 data-[state=active]:bg-orange-500 data-[state=active]:text-white"
            >
              This Year
            </TabsTrigger>

          </TabsList>
        </div>

        {/* Contenu Today */}
        <TabsContent value="today">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="border rounded-2xl p-5">
              <h2 className="font-bold text-xl">
                Total Income Today
              </h2>
              <p>$20,000</p>
            </div>

            <div className="border rounded-2xl p-5">
              <h2 className="font-bold text-xl">
                Daily Balance
              </h2>
              <p>$30,000</p>
            </div>
          </div>
        </TabsContent>

        {/* Contenu Week */}
        <TabsContent value="week">
          <h2 className="text-2xl font-bold">
            Weekly Statistics
          </h2>
          <p>Données de la semaine</p>
        </TabsContent>

        {/* Contenu Month */}
        <TabsContent value="month">
          <h2 className="text-2xl font-bold">
            Monthly Statistics
          </h2>
          <p>Données du mois</p>
        </TabsContent>

        {/* Contenu Year */}
        <TabsContent value="year">
          <h2 className="text-2xl font-bold">
            Yearly Statistics
          </h2>
          <p>Données de l'année</p>
        </TabsContent>

      </Tabs>
    </div>
  );
}
