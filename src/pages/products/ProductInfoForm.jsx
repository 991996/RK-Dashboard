import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
  FieldSet,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import TagInput from "./TagInput";
import ColorInput from "./ColorInput";
import SizeInput from "./SizeInput";

export function ProductInfoForm({ product, dispatch }) {
  return (
    <Card
      className="text-gray-500 dark:text-gray-300 text-lg
    dark:bg-primary-black"
    >
      <CardHeader>
        <CardTitle className="text-gray-700 dark:text-gray-300 font-hanken">
          Product Information
        </CardTitle>
        <hr />
      </CardHeader>
      <CardContent>
        <FieldGroup>
          <FieldSet>
            <FieldGroup>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Field>
                  <FieldLabel htmlFor="name">Product Name</FieldLabel>
                  <Input
                    id="name"
                    placeholder="Item's Name"
                    required
                    value={product.name}
                    onChange={(event) =>
                      dispatch({
                        type: "UPDATE_FIELD",
                        field: "name",
                        value: event.target.value,
                      })
                    }
                  />
                </Field>
                <Field>
                  <FieldLabel htmlFor="category">Category</FieldLabel>
                  <Select
                    defaultValue={product.category}
                    onValueChange={(value) =>
                      dispatch({
                        type: "UPDATE_FIELD",
                        field: "category",
                        value: value,
                      })
                    }
                  >
                    <SelectTrigger id="category">
                      <SelectValue placeholder="Choose a Category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="women clothes">
                          Women Clothes
                        </SelectItem>
                        <SelectItem value="men clothes">Men Clothes</SelectItem>
                        <SelectItem value="kids clothes">
                          Kids Clothes
                        </SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </Field>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Field>
                  <FieldLabel htmlFor="brand">Brand</FieldLabel>
                  <Input
                    id="brand"
                    placeholder="Brand Name"
                    required
                    value={product.brand}
                    onChange={(event) =>
                      dispatch({
                        type: "UPDATE_FIELD",
                        field: "brand",
                        value: event.target.value,
                      })
                    }
                  />
                </Field>
                <Field>
                  <FieldLabel htmlFor="weight">Weight</FieldLabel>
                  <Input
                    id="weight"
                    placeholder="In kg"
                    required
                    value={product.weight}
                    onChange={(event) =>
                      dispatch({
                        type: "UPDATE_FIELD",
                        field: "weight",
                        value: event.target.value,
                      })
                    }
                  />
                </Field>
              </div>
            </FieldGroup>
          </FieldSet>
          <FieldSeparator />
          <FieldSet>
            <FieldGroup>
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
                <Field>
                  <FieldLabel htmlFor="size">Size</FieldLabel>
                  <SizeInput product={product} dispatch={dispatch} />
                </Field>
                <Field>
                  <FieldLabel htmlFor="size">Color</FieldLabel>
                  <ColorInput product={product} dispatch={dispatch} />
                </Field>
              </div>
            </FieldGroup>
          </FieldSet>
          <FieldSeparator />
          <FieldSet>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="description">Description</FieldLabel>
                <Textarea
                  id="description"
                  placeholder="Short description about the product"
                  className="resize-none"
                  value={product.description}
                  onChange={(event) =>
                    dispatch({
                      type: "UPDATE_FIELD",
                      field: "description",
                      value: event.target.value,
                    })
                  }
                />
              </Field>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <Field>
                  <FieldLabel htmlFor="tagNumber">Tag Number</FieldLabel>
                  <Input
                    id="tagNumber"
                    placeholder="#******"
                    type="number"
                    value={product.tagNumber}
                    onChange={(event) =>
                      dispatch({
                        type: "UPDATE_FIELD",
                        field: "tagNumber",
                        value: event.target.value,
                      })
                    }
                  />
                </Field>
                <Field>
                  <FieldLabel htmlFor="stock">Stock</FieldLabel>
                  <Input
                    id="stock"
                    placeholder="Quantity"
                    type="number"
                    required
                    value={product.stock}
                    onChange={(event) =>
                      dispatch({
                        type: "UPDATE_FIELD",
                        field: "stock",
                        value: event.target.value,
                      })
                    }
                  />
                </Field>
                <Field>
                  <FieldLabel htmlFor="gender">Tag</FieldLabel>
                  <TagInput product={product} dispatch={dispatch} />
                </Field>
              </div>
            </FieldGroup>
          </FieldSet>
        </FieldGroup>
      </CardContent>
    </Card>
  );
}
