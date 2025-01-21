'use client';

/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel } from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useForm } from 'react-hook-form';

const Students = () => {
  const onSubmit = (data: any) => {
  };
  const form = useForm();
  return (
    <div>
      <h2 className="heading">Students</h2>
      <Form {...form}>
        <form className="space-y-3" onSubmit={form.handleSubmit(onSubmit)}>
          <div className="grid grid-cols-4 items-end py-2 pb-6">
            <FormField
              control={form.control}
              name="class"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-xs ps-1">Select Class*</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="rounded-none border py-6 placeholder:opacity-25">
                        <SelectValue
                          placeholder="Select Class*"
                          className="placeholder:opacity-25 rounded-none "
                        />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="1">Play</SelectItem>
                      <SelectItem value="2">Nursery</SelectItem>
                      <SelectItem value="3">KG</SelectItem>
                      <SelectItem value="4">One</SelectItem>
                      <SelectItem value="5">Two</SelectItem>
                      <SelectItem value="6">Three</SelectItem>
                      <SelectItem value="7">Four</SelectItem>
                      <SelectItem value="8">Five</SelectItem>
                      <SelectItem value="9">Six</SelectItem>
                      <SelectItem value="10">Seven</SelectItem>
                      <SelectItem value="11">Eight</SelectItem>
                      <SelectItem value="12">Nine</SelectItem>
                      <SelectItem value="13">Ten</SelectItem>
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="section"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-xs ps-1">Select Section*</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="rounded-none py-6 border-x-0 placeholder:opacity-25">
                        <SelectValue
                          placeholder="Select Section*"
                          className="placeholder:opacity-25"
                        />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="2018">2018</SelectItem>
                      <SelectItem value="2019">2019</SelectItem>
                      <SelectItem value="2020">2020</SelectItem>
                      <SelectItem value="2021">2021</SelectItem>
                      <SelectItem value="2022">2022</SelectItem>
                      <SelectItem value="2023">2023</SelectItem>
                      <SelectItem value="2024">2024</SelectItem>
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="group"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-xs ps-1">Select Group*</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="rounded-none py-6 border placeholder:opacity-25">
                        <SelectValue
                          placeholder="Select Group*"
                          className="placeholder:opacity-25"
                        />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="bangla-version">Bangla Version</SelectItem>
                      <SelectItem value="english-version">English Version</SelectItem>
                      <SelectItem value="science">Science</SelectItem>
                      <SelectItem value="business-study">Business Study</SelectItem>
                      <SelectItem value="humanities">Humanities</SelectItem>
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />

            <Button className="rounded-none py-[25px] placeholder:opacity-25" type="submit">
              Search
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default Students;
