"use server";
import { z } from "zod";
import e, { createClient } from "@/dbschema/edgeql-js";
import { formSchema } from "@/components/FormSubmit";

const client = createClient();

const query = e.params(
  {
    title: e.str,
    content: e.str,
  },
  (params) => {
    return e.insert(e.BlogPost, {
      title: params.title,
      content: params.content,
    });
  }
);

export async function createBlogPost(values: z.infer<typeof formSchema>) {
  const result = await query.run(client, {
    ...values,
  });
  return result;
}
