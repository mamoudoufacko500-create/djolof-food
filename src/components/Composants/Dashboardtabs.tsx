import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { DashboardChart } from "./dashboard-chart";
import { CircleChart } from "./circlechart";

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
              <DashboardChart />
            </div>

            <div className="border rounded-2xl p-5">
              <CircleChart/>
            </div>
          </div>
        </TabsContent>

        {/* Contenu Week */}
        <TabsContent value="week">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="border rounded-2xl p-5">
              <DashboardChart />
            </div>

            <div className="border rounded-2xl p-5">
              <CircleChart/>
            </div>
            <div>
              <h1>Total Balance</h1>
              <div>
                <div>
                  <h2>Total balance</h2>
                  <span>40 000 FCFA</span>
                </div>
                <p>(+ 20 increase)</p>
              </div>
               <div>
                <div>
                  <h2>Total Expense</h2>
                  <span>25 000 FCFA</span>
                </div>
                <p>(+ 30 increase)</p>
              </div>
            </div>
          </div>
        </TabsContent>

        {/* Contenu Month */}
        <TabsContent value="month">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="border rounded-2xl p-5">
              <DashboardChart />
            </div>

            <div className="border rounded-2xl p-5">
              <CircleChart/>
            </div>
          </div>
        </TabsContent>

        {/* Contenu Year */}
        <TabsContent value="year">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="border rounded-2xl p-5">
              <DashboardChart />
            </div>

            <div className="border rounded-2xl p-5">
              <CircleChart/>
            </div>
          </div>
        </TabsContent>

      </Tabs>
    </div>
  );
}
