"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { SetStateAction, Dispatch } from "react";
import { ShippingAddress } from "./checkout-page";
import { useSession } from "next-auth/react";
import { useState } from "react";

export default function ShippingAddressDialog({
  address,
  setAddress,
  children,
}: {
  children: React.ReactNode;
  address: ShippingAddress | undefined;
  setAddress: Dispatch<SetStateAction<ShippingAddress | undefined>>;
}) {
  const session = useSession();

  const [formData, setFormData] = useState<ShippingAddress | undefined>(
    address
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData({ ...(formData as any), [id]: value });
  };

  const handleSubmit = () => {
    setAddress(formData);
  };

  return (
    <>
      <div>
        <Dialog>
          <DialogTrigger asChild>{children}</DialogTrigger>
          <DialogContent className="sm:max-w-[425px] bg-white">
            <DialogHeader>
              <DialogTitle>Address Details</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Name
                </Label>
                <Input
                  id="fullName"
                  onChange={handleChange}
                  defaultValue={
                    (address && address.fullName) ||
                    (session.data?.user.name as string)
                  }
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="username" className="text-right">
                  Phone Number
                </Label>
                <Input
                  onChange={handleChange}
                  id="phoneNumber"
                  defaultValue={address?.phoneNumber}
                  placeholder="Your Phone Number"
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="username" className="text-right">
                  Street Name and House Number
                </Label>
                <Input
                  id="streetName"
                  onChange={handleChange}
                  defaultValue={address?.streetName}
                  placeholder="Street name and house number"
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="username" className="text-right">
                  City
                </Label>
                <Input
                  id="city"
                  onChange={handleChange}
                  defaultValue={address?.city}
                  placeholder="Your city"
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="username" className="text-right">
                  Region
                </Label>
                <Input
                  id="region"
                  onChange={handleChange}
                  defaultValue={address?.region}
                  placeholder="Your Region"
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="username" className="text-right">
                  Postal code
                </Label>
                <Input
                  id="postalCode"
                  onChange={handleChange}
                  defaultValue={address?.postalCode}
                  placeholder="Postal code"
                  className="col-span-3"
                />
              </div>
            </div>
            <DialogFooter>
              <DialogClose asChild>
                <Button onClick={handleSubmit} type="submit">
                  Submit
                </Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
}
