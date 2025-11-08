import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const AccountTypes = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <Tabs defaultValue="personal" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12">
            <TabsTrigger value="personal">Personal account</TabsTrigger>
            <TabsTrigger value="business">Business account</TabsTrigger>
          </TabsList>
          
          <TabsContent value="personal">
            <Card className="p-8 max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Personal Account Features</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-accent">✓</span>
                      <span>Easy money transfers</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent">✓</span>
                      <span>Secure payment processing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent">✓</span>
                      <span>Mobile app access</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent">✓</span>
                      <span>24/7 customer support</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-muted/50 rounded-lg p-6">
                  <div className="text-4xl font-bold mb-2">$0</div>
                  <p className="text-muted-foreground">Monthly fee for personal accounts</p>
                </div>
              </div>
            </Card>
          </TabsContent>
          
          <TabsContent value="business">
            <Card className="p-8 max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Business Account Features</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-accent">✓</span>
                      <span>Advanced analytics dashboard</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent">✓</span>
                      <span>Multiple user management</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent">✓</span>
                      <span>API integration support</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent">✓</span>
                      <span>Priority customer support</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-muted/50 rounded-lg p-6">
                  <div className="text-4xl font-bold mb-2">2.9%</div>
                  <p className="text-muted-foreground">Transaction fee for business accounts</p>
                </div>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default AccountTypes;
