import { Field, FieldGroup, FieldLabel, FieldSet } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function CategoryInfoForm({ category, dispatch }) {
  return (
    <Card
      className="text-gray-500 dark:text-gray-300 text-lg
      dark:bg-primary-black"
    >
      <CardHeader>
        <CardTitle className="text-gray-700 dark:text-gray-300 font-hanken">
          Genenral Information
        </CardTitle>
        <hr />
      </CardHeader>
      <CardContent>
        <FieldGroup>
          <FieldSet>
            <FieldGroup>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Field>
                  <FieldLabel htmlFor="title">Category Title</FieldLabel>
                  <Input
                    id="title"
                    placeholder="Category Title"
                    required
                    value={category?.title}
                    onChange={(event) =>
                      dispatch({
                        type: "UPDATE_FIELD",
                        field: "title",
                        value: event.target.value,
                      })
                    }
                  />
                </Field>

                <Field>
                  <FieldLabel htmlFor="tadId">Tag ID</FieldLabel>
                  <Input
                    id="tadId"
                    placeholder="#******"
                    required
                    value={category?.tagId}
                    onChange={(event) =>
                      dispatch({
                        type: "UPDATE_FIELD",
                        field: "tagId",
                        value: event.target.value,
                      })
                    }
                  />
                </Field>
              </div>
            </FieldGroup>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="description">Description</FieldLabel>
                <Textarea
                  id="description"
                  placeholder="Short description about the product"
                  className="resize-none"
                  value={category?.description}
                  onChange={(event) =>
                    dispatch({
                      type: "UPDATE_FIELD",
                      field: "description",
                      value: event.target.value,
                    })
                  }
                />
              </Field>
            </FieldGroup>
          </FieldSet>
        </FieldGroup>
      </CardContent>
    </Card>
  );
}
