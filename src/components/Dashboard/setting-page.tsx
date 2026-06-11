import { useEffect, useState } from "react";
import { ChevronRight, Pencil } from "lucide-react";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function SettingPage() {
  const [activeTab, setActiveTab] = useState("personal");

  const [profile, setProfile] = useState(() => {
    const saved = localStorage.getItem("settings");

    return saved
      ? JSON.parse(saved)
      : {
          firstName: "Saul",
          lastName: "Goodmate",
          email: "saul@gmail.com",
          phone: "+221 77 000 00 00",
          birthDate: "2001-01-01",
          position: "Manager",
          image:
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",
        };
  });

  useEffect(() => {
    localStorage.setItem(
      "settings",
      JSON.stringify(profile)
    );
  }, [profile]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
  };

  const handleImage = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0];

    if (file) {
      setProfile({
        ...profile,
        image: URL.createObjectURL(file),
      });
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 p-8">
      <h1 className="mb-6 text-3xl font-bold">
        Setting
      </h1>

      <div className="grid gap-6 lg:grid-cols-[350px_1fr]">
        
        {/* LEFT */}
        <Card className="p-6">
          <div className="flex flex-col items-center">
            <div className="relative">
              <img
                src={profile.image}
                alt=""
                className="h-32 w-32 rounded-full object-cover"
              />

              <label className="absolute bottom-1 right-1 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-orange-500 text-white">
                <Pencil size={14} />

                <input
                  type="file"
                  hidden
                  onChange={handleImage}
                />
              </label>
            </div>

            <h2 className="mt-4 text-xl font-bold">
              {profile.firstName}{" "}
              {profile.lastName}
            </h2>

            <p className="text-gray-500">
              {profile.position}
            </p>
          </div>

          <hr className="my-6" />

          <div className="space-y-3">
            <Button
              variant={
                activeTab === "personal"
                  ? "default"
                  : "outline"
              }
              className="w-full justify-between"
              onClick={() =>
                setActiveTab("personal")
              }
            >
              Personal Information
              <ChevronRight size={16} />
            </Button>

            <Button
              variant="outline"
              className="w-full justify-between"
            >
              Employees Management
              <ChevronRight size={16} />
            </Button>

            <Button
              variant="outline"
              className="w-full justify-between"
            >
              Opening Hours
              <ChevronRight size={16} />
            </Button>

            <Button
              variant="outline"
              className="w-full justify-between"
            >
              Login & Password
              <ChevronRight size={16} />
            </Button>

            <Button
              variant="ghost"
              className="w-full justify-start text-red-500"
            >
              Logout
            </Button>
          </div>
        </Card>

        {/* RIGHT */}
        <Card className="p-8">
          <h2 className="mb-2 text-2xl font-bold">
            Personal Information
          </h2>

          <p className="mb-8 text-sm text-gray-500">
            Manage your account information.
          </p>

          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label className="mb-2 block">
                First Name
              </label>

              <Input
                name="firstName"
                value={profile.firstName}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="mb-2 block">
                Last Name
              </label>

              <Input
                name="lastName"
                value={profile.lastName}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="mb-2 block">
                Email
              </label>

              <Input
                name="email"
                value={profile.email}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="mb-2 block">
                Phone Number
              </label>

              <Input
                name="phone"
                value={profile.phone}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="mb-2 block">
                Date Of Birth
              </label>

              <Input
                type="date"
                name="birthDate"
                value={profile.birthDate}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="mb-2 block">
                Position
              </label>

              <Input
                name="position"
                value={profile.position}
                onChange={handleChange}
              />
            </div>
          </div>

          <Button
            className="mt-8 w-full bg-orange-500 hover:bg-orange-600"
          >
            Save Changes
          </Button>
        </Card>
      </div>
    </div>
  );
}