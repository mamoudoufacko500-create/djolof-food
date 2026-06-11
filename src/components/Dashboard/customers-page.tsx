"use client";

import { useState } from "react";
import {
  Pencil,
  Trash2,
  UserPlus,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";

import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Link } from "react-router-dom";

type Customer = {
  id: number;
  name: string;
  orders: number;
  spent: string;
  gender: string;
  address: string;
  image: string;
};

const initialCustomers: Customer[] = [
  {
    id: 1,
    name: "Addie Minatro",
    orders: 250,
    spent: "$1900",
    gender: "Male",
    address: "2603 Jadewood Drive",
    image: "https://i.pravatar.cc/150?img=1",
  },
  {
    id: 2,
    name: "Manuel Labor",
    orders: 300,
    spent: "$4600",
    gender: "Male",
    address: "3799 Glendale Avenue",
    image: "https://i.pravatar.cc/150?img=2",
  },
  {
    id: 3,
    name: "Jack Armendo",
    orders: 260,
    spent: "$2900",
    gender: "Male",
    address: "8270 Wildwood Street",
    image: "https://i.pravatar.cc/150?img=3",
  },
  {
    id: 4,
    name: "Shaun Clowd",
    orders: 450,
    spent: "$5900",
    gender: "Male",
    address: "5056 Lindgren Village",
    image: "https://i.pravatar.cc/150?img=4",
  },
];

export default function CustomersPage() {

  const [selectedCustomer, setSelectedCustomer] =
    useState<Customer | null>(null);

  const [editOpen, setEditOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);
   const [customers, setCustomers] = useState(() => {
  
    const saved = localStorage.getItem("customers");
  return saved ? JSON.parse(saved) : [];
});
  const handleEdit = (customer: Customer) => {
    setSelectedCustomer(customer);
    setEditOpen(true);
  };

  const handleDelete = (customer: Customer) => {
    setSelectedCustomer(customer);
    setDeleteOpen(true);
  };

  const saveCustomer = () => {
  if (!selectedCustomer) return;

  const updatedCustomers = customers.map((customer: any) =>
    customer.id === selectedCustomer.id
      ? selectedCustomer
      : customer
  );

  setCustomers(updatedCustomers);
  localStorage.setItem("customers", JSON.stringify(updatedCustomers));

  setEditOpen(false);
};

  const confirmDelete = () => {
    if (!selectedCustomer) return;

    setCustomers((prev: any) =>
      prev.filter(
        (customer: any) => customer.id !== selectedCustomer.id
      )
    );

    setDeleteOpen(false);
  };

  return (
    <div className="flex min-h-screen bg-slate-100">

      {/* Main */}
      <main className="flex-1 p-8">
        <Card className="rounded-3xl shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-2xl">
              Customers
            </CardTitle>

              <Link to="add-customer" className="bg-orange-500 hover:bg-orange-600 rounded-xl flex items-center gap-2 px-4 py-2">
              <UserPlus className="mr-2 h-4 w-4" />
              Add Customer
              </Link>
          </CardHeader>

          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Orders</TableHead>
                  <TableHead>Spent ($)</TableHead>
                  <TableHead>Gender</TableHead>
                  <TableHead>Address</TableHead>
                  <TableHead>Action</TableHead>
                </TableRow>
              </TableHeader>

              <TableBody>
                {customers.map((customer: any ) => (
                  <TableRow key={customer.id}>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <Avatar>
                          <AvatarImage
                            src={customer.image}
                          />
                          <AvatarFallback>
                            {customer.name[0]}
                          </AvatarFallback>
                        </Avatar>

                        <span className="font-medium">
                          {customer.name}
                        </span>
                      </div>
                    </TableCell>

                    <TableCell>
                      {customer.orders}
                    </TableCell>

                    <TableCell className="text-orange-500 font-medium">
                      {customer.spent}
                    </TableCell>

                    <TableCell>
                      {customer.gender}
                    </TableCell>

                    <TableCell>
                      {customer.address}
                    </TableCell>

                    <TableCell>
                      <div className="flex gap-3">
                        <button
                          onClick={() =>
                            handleEdit(customer)
                          }
                          className="text-green-600 flex items-center gap-1 text-sm"
                        >
                          <Pencil size={14} />
                          Edit
                        </button>

                        <button
                          onClick={() =>
                            handleDelete(customer)
                          }
                          className="text-red-500 flex items-center gap-1 text-sm"
                        >
                          <Trash2 size={14} />
                          Delete
                        </button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </main>

      {/* Edit Dialog */}
      <Dialog open={editOpen} onOpenChange={setEditOpen}>
        <DialogContent className="rounded-3xl">
          <DialogHeader>
            <DialogTitle>
              Edit Customer
            </DialogTitle>
          </DialogHeader>

          {selectedCustomer && (
            <div className="space-y-4">
              <Input
                placeholder="Name"
                value={selectedCustomer.name}
                onChange={(e) =>
                  setSelectedCustomer({
                    ...selectedCustomer,
                    name: e.target.value,
                  })
                }
              />

              <Input
                placeholder="Orders"
                value={selectedCustomer.orders}
                onChange={(e) =>
                  setSelectedCustomer({
                    ...selectedCustomer,
                    orders: Number(
                      e.target.value
                    ),
                  })
                }
              />

              <Input
                placeholder="Spent"
                value={selectedCustomer.spent}
                onChange={(e) =>
                  setSelectedCustomer({
                    ...selectedCustomer,
                    spent: e.target.value,
                  })
                }
              />

              <Input
                placeholder="Address"
                value={selectedCustomer.address}
                onChange={(e) =>
                  setSelectedCustomer({
                    ...selectedCustomer,
                    address: e.target.value,
                  })
                }
              />
            </div>
          )}

          <DialogFooter>
            <Button
              className="bg-orange-500 hover:bg-orange-600"
              onClick={saveCustomer}
            >
              Save Customer
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Delete Dialog */}
      <Dialog
        open={deleteOpen}
        onOpenChange={setDeleteOpen}
      >
        <DialogContent className="rounded-3xl">
          <DialogHeader>
            <DialogTitle>
              Delete Customer ?
            </DialogTitle>
          </DialogHeader>

          <p className="text-sm text-muted-foreground">
            Are you sure you want to delete this
            customer?
          </p>

          <DialogFooter>
            <Button
              variant="outline"
              onClick={() =>
                setDeleteOpen(false)
              }
            >
              No
            </Button>

            <Button
              variant="destructive"
              onClick={confirmDelete}
            >
              Yes
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
