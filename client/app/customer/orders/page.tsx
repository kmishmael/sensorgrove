import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
export default function Page() {
  return (
    <>
      <div className="p-2">
        <h2 className="font-semibold text-xl">Cards</h2>
        <h4 className="font-normal text-sm py-2 text-neutral-600">
          manage payment methods
        </h4>
        <br />
        <Tabs defaultValue="current" className="">
          <TabsList className="w-full grid grid-cols-4">
            <TabsTrigger
              className="!shadow-none rounded-none data-[state=active]:text-primary border-b-2 text-neutral-600 border-neutral-300 data-[state=active]:border-primary"
              value="current"
              asChild
            >
              <div className="flex flex-row gap-2">
                <span>Current</span>
                <span className="bg-gray-100 text-sm flex justify-center items-center w-5 h-5 rounded-full">
                  8
                </span>
              </div>
            </TabsTrigger>
            <TabsTrigger
              className="!shadow-none rounded-none data-[state=active]:text-primary border-b-2 border-neutral-300 data-[state=active]:border-primary"
              value="delivered"
            >
              <span>Delivered</span>
              <span className="bg-gray-100 text-sm flex justify-center items-center w-5 h-5 rounded-full">
                8
              </span>
            </TabsTrigger>
            <TabsTrigger
              className="!shadow-none rounded-none data-[state=active]:text-primary border-b-2 border-neutral-300 data-[state=active]:border-primary"
              value="canceled"
            >
              <span>Canceled</span>
              <span className="bg-gray-100 text-sm flex justify-center items-center w-5 h-5 rounded-full">
                8
              </span>
            </TabsTrigger>
            <TabsTrigger
              className="!shadow-none rounded-none data-[state=active]:text-primary border-b-2 border-neutral-300 data-[state=active]:border-primary"
              value="returned"
            >
              <span>Returned</span>
              <span className="bg-gray-100 text-sm flex justify-center items-center w-5 h-5 rounded-full">
                8
              </span>
            </TabsTrigger>
          </TabsList>
          <TabsContent value="current">
            <div className="h-full p-4 w-full flex flex-col items-center justify-center">
              <img
                src="/3d illustration of payment confirmation bill.png"
                alt="3d illustration of payment confirmation bill"
              />
              <p className="text-sm">You have not placed any orders yet</p>
            </div>
          </TabsContent>
          <TabsContent value="delivered">
            <div className="h-full p-4 w-full flex flex-col items-center justify-center">
              <img
                src="/3d illustration of payment confirmation bill.png"
                alt="3d illustration of payment confirmation bill"
              />
              <p className="text-sm">You have not placed any orders yet</p>
            </div>
          </TabsContent>
          <TabsContent value="canceled">
            <div className="h-full p-4 w-full flex flex-col items-center justify-center">
              <img
                src="/3d illustration of payment confirmation bill.png"
                alt="3d illustration of payment confirmation bill"
              />
              <p className="text-sm">You have not placed any orders yet</p>
            </div>
          </TabsContent>
          <TabsContent value="returned">
            <div className="h-full p-4 w-full flex flex-col items-center justify-center">
              <img
                src="/3d illustration of payment confirmation bill.png"
                alt="3d illustration of payment confirmation bill"
              />
              <p className="text-sm">You have not placed any orders yet</p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
}
