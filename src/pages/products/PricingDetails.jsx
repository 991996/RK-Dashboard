import { Field, FieldGroup, FieldLabel, FieldSet } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import { DollarSign } from "lucide-react";
import { MdDiscount } from "react-icons/md";
import { TbTax } from "react-icons/tb";

export function PricingDetails() {
  return (
    <Card
      className="text-gray-500 dark:text-gray-300 text-lg
      dark:bg-primary-black"
    >
      <CardHeader>
        <CardTitle className="text-gray-700 dark:text-gray-300 font-hanken">
          Pricing Details
        </CardTitle>
        <hr />
      </CardHeader>
      <CardContent>
        <form>
          <FieldGroup>
            <FieldSet>
              <FieldGroup>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  <Field>
                    <FieldLabel htmlFor="brand">Price</FieldLabel>
                    <ButtonGroup>
                      <Button
                        className="bg-gray-200 text-gray-600
                      hover:bg-gray-300"
                      >
                        <DollarSign />
                      </Button>
                      <Input
                        id="price"
                        placeholder="0.00"
                        type="number"
                        required
                      />
                    </ButtonGroup>
                  </Field>
                  <Field>
                    <FieldLabel htmlFor="discount">Discount</FieldLabel>
                    <ButtonGroup>
                      <Button
                        className="bg-gray-200 text-gray-600
                      hover:bg-gray-300"
                      >
                        <MdDiscount />
                      </Button>
                      <Input id="discount" placeholder="0.00" type="number" />
                    </ButtonGroup>
                  </Field>
                  <Field>
                    <FieldLabel htmlFor="tax">Tax</FieldLabel>
                    <ButtonGroup>
                      <Button
                        className="bg-gray-200 text-gray-600
                      hover:bg-gray-300"
                      >
                        <TbTax />
                      </Button>
                      <Input id="tax" placeholder="0.00" type="number" />
                    </ButtonGroup>
                  </Field>
                </div>
              </FieldGroup>
            </FieldSet>
          </FieldGroup>
        </form>
      </CardContent>
    </Card>
  );
}
