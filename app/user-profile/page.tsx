"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  User,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Edit3,
  Save,
  X,
  Camera,
  Settings,
  Shield,
  Bell,
  Globe,
  Heart,
  Star,
  Award,
  Users,
  Activity,
} from "lucide-react"

// Mock user data
const initialUserData = {
  id: "1",
  firstName: "Ashish",
  lastName: "Verma",
  email: "ashishverma2047@gmail.com",
  phone: "+91 6398069235",
  bio: "Front-end Developer crafting elegant, high-performance, and user-friendly digital experiences.",
  location: "Dehardun, Uttarakhand",
  website: "ashish-web-port.vercel.app",
  company: "Tech Solutions Inc.",
  position: "Senior Frontend Developer",
  joinDate: "2024-08-08",
  avatar: "/Ashish_profile.jpg",
  coverImage: "/placeholder.jpg",
  skills: ["React", "TypeScript", "SCSS", "Javascript", "HTML", "Angular", "CSS", "Bootstrap", "Jquery", "Chakra UI","Next.JS", "Git", "Tailwind CSS"],
  interests: ["Photography", "Travel", "Music", "Coding"],
  stats: {
    projects: 20,
    followers: 500,
    following: 220,
    contributions: 55,
  },
  socialLinks: {
    linkedin: "https://www.linkedin.com/in/ashish-verma-b79229249/",
    github: "https://github.com/ashishvermag245",
  },
}

export default function UserProfile() {
  const [userData, setUserData] = useState(initialUserData)
  const [isEditing, setIsEditing] = useState(false)
  const [editData, setEditData] = useState(userData)

  const handleEdit = () => {
    setIsEditing(true)
    setEditData(userData)
  }

  const handleSave = () => {
    setUserData(editData)
    setIsEditing(false)
  }

  const handleCancel = () => {
    setEditData(userData)
    setIsEditing(false)
  }

  const handleInputChange = (field: string, value: string) => {
    setEditData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleNestedInputChange = (parent: string, field: string, value: string) => {
    setEditData((prev) => ({
      ...prev,
      [parent]: {
        ...(prev[parent as keyof typeof prev] as any),
        [field]: value,
      },
    }))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Header Section */}
        <div className="relative mb-8">
          <div
            className="h-64 rounded-xl bg-cover bg-center relative overflow-hidden"
            style={{ backgroundImage: `url(${userData.coverImage})` }}
          >
            <div className="absolute inset-0 bg-black/20" />
            <div className="absolute top-4 right-4">
              {!isEditing ? (
                <Button onClick={handleEdit} variant="secondary" size="sm">
                  <Edit3 className="w-4 h-4 mr-2" />
                  Edit Profile
                </Button>
              ) : (
                <div className="flex gap-2">
                  <Button onClick={handleSave} size="sm">
                    <Save className="w-4 h-4 mr-2" />
                    Save
                  </Button>
                  <Button onClick={handleCancel} variant="outline" size="sm">
                    <X className="w-4 h-4 mr-2" />
                    Cancel
                  </Button>
                </div>
              )}
            </div>
          </div>

          {/* Profile Avatar and Basic Info */}
          <div className="relative -mt-20 px-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-end gap-6">
              <div className="relative">
                <Avatar className="w-32 h-32 border-4 border-white shadow-xl">
                  <AvatarImage className="object-cover"
                    src={userData.avatar || "/placeholder.svg"}
                    alt={`${userData.firstName} ${userData.lastName}`}
                  />
                  <AvatarFallback className="text-2xl">
                    {userData.firstName[0]}
                    {userData.lastName[0]}
                  </AvatarFallback>
                </Avatar>
                {isEditing && (
                  <Button size="sm" className="absolute bottom-0 right-0 rounded-full w-8 h-8 p-0">
                    <Camera className="w-4 h-4" />
                  </Button>
                )}
              </div>

              <div className="flex-1 bg-white dark:bg-slate-800 rounded-lg p-6 shadow-lg">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
                      {userData.firstName} {userData.lastName}
                    </h1>
                    <p className="text-slate-600 dark:text-slate-300 text-lg">
                      {userData.position} at {userData.company}
                    </p>
                    <div className="flex items-center gap-2 mt-2 text-slate-500 dark:text-slate-400">
                      <MapPin className="w-4 h-4" />
                      <span>{userData.location}</span>
                    </div>
                  </div>

                  <div className="flex gap-6 text-center">
                    <div>
                      <div className="text-2xl font-bold text-slate-900 dark:text-white">{userData.stats.projects}</div>
                      <div className="text-sm text-slate-500 dark:text-slate-400">Projects</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-slate-900 dark:text-white">
                        {userData.stats.followers}
                      </div>
                      <div className="text-sm text-slate-500 dark:text-slate-400">Followers</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-slate-900 dark:text-white">
                        {userData.stats.following}
                      </div>
                      <div className="text-sm text-slate-500 dark:text-slate-400">Following</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 lg:w-auto lg:grid-cols-4">
            <TabsTrigger value="overview" className="flex items-center gap-2">
              <User className="w-4 h-4" />
              Overview
            </TabsTrigger>
            <TabsTrigger value="details" className="flex items-center gap-2">
              <Settings className="w-4 h-4" />
              Details
            </TabsTrigger>
            <TabsTrigger value="activity" className="flex items-center gap-2">
              <Activity className="w-4 h-4" />
              Activity
            </TabsTrigger>
            <TabsTrigger value="settings" className="flex items-center gap-2">
              <Shield className="w-4 h-4" />
              Settings
            </TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* About Section */}
              <div className="lg:col-span-2 space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <User className="w-5 h-5" />
                      About
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    {isEditing ? (
                      <Textarea
                        value={editData.bio}
                        onChange={(e) => handleInputChange("bio", e.target.value)}
                        placeholder="Tell us about yourself..."
                        className="min-h-[100px]"
                      />
                    ) : (
                      <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{userData.bio}</p>
                    )}
                  </CardContent>
                </Card>

                {/* Skills */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Award className="w-5 h-5" />
                      Skills
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {userData.skills.map((skill, index) => (
                        <Badge key={index} variant="secondary" className="px-3 py-1">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Interests */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Heart className="w-5 h-5" />
                      Interests
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {userData.interests.map((interest, index) => (
                        <Badge key={index} variant="outline" className="px-3 py-1">
                          {interest}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Contact Info */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Contact Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Mail className="w-4 h-4 text-slate-500" />
                      <span className="text-sm">{userData.email}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="w-4 h-4 text-slate-500" />
                      <span className="text-sm">{userData.phone}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Globe className="w-4 h-4 text-slate-500" />
                      <span className="text-sm">{userData.website}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Calendar className="w-4 h-4 text-slate-500" />
                      <span className="text-sm">Joined {new Date(userData.joinDate).toLocaleDateString()}</span>
                    </div>
                  </CardContent>
                </Card>

                {/* Stats */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Statistics</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-slate-600 dark:text-slate-300">Contributions</span>
                      <span className="font-semibold">{userData.stats.contributions}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-slate-600 dark:text-slate-300">Projects</span>
                      <span className="font-semibold">{userData.stats.projects}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-slate-600 dark:text-slate-300">Network</span>
                      <span className="font-semibold">{userData.stats.followers + userData.stats.following}</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Details Tab */}
          <TabsContent value="details" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Personal Information</CardTitle>
                  <CardDescription>Update your personal details</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      {isEditing ? (
                        <Input
                          id="firstName"
                          value={editData.firstName}
                          onChange={(e) => handleInputChange("firstName", e.target.value)}
                        />
                      ) : (
                        <div className="p-2 bg-slate-50 dark:bg-slate-800 rounded-md">{userData.firstName}</div>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      {isEditing ? (
                        <Input
                          id="lastName"
                          value={editData.lastName}
                          onChange={(e) => handleInputChange("lastName", e.target.value)}
                        />
                      ) : (
                        <div className="p-2 bg-slate-50 dark:bg-slate-800 rounded-md">{userData.lastName}</div>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    {isEditing ? (
                      <Input
                        id="email"
                        type="email"
                        value={editData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                      />
                    ) : (
                      <div className="p-2 bg-slate-50 dark:bg-slate-800 rounded-md">{userData.email}</div>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    {isEditing ? (
                      <Input
                        id="phone"
                        value={editData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                      />
                    ) : (
                      <div className="p-2 bg-slate-50 dark:bg-slate-800 rounded-md">{userData.phone}</div>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="location">Location</Label>
                    {isEditing ? (
                      <Input
                        id="location"
                        value={editData.location}
                        onChange={(e) => handleInputChange("location", e.target.value)}
                      />
                    ) : (
                      <div className="p-2 bg-slate-50 dark:bg-slate-800 rounded-md">{userData.location}</div>
                    )}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Professional Information</CardTitle>
                  <CardDescription>Your work and career details</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="company">Company</Label>
                    {isEditing ? (
                      <Input
                        id="company"
                        value={editData.company}
                        onChange={(e) => handleInputChange("company", e.target.value)}
                      />
                    ) : (
                      <div className="p-2 bg-slate-50 dark:bg-slate-800 rounded-md">{userData.company}</div>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="position">Position</Label>
                    {isEditing ? (
                      <Input
                        id="position"
                        value={editData.position}
                        onChange={(e) => handleInputChange("position", e.target.value)}
                      />
                    ) : (
                      <div className="p-2 bg-slate-50 dark:bg-slate-800 rounded-md">{userData.position}</div>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="website">Website</Label>
                    {isEditing ? (
                      <Input
                        id="website"
                        value={editData.website}
                        onChange={(e) => handleInputChange("website", e.target.value)}
                      />
                    ) : (
                      <div className="p-2 bg-slate-50 dark:bg-slate-800 rounded-md">{userData.website}</div>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label>Social Links</Label>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="text-sm w-20">Twitter:</span>
                        {isEditing ? (
                          <Input
                            value={editData.socialLinks.twitter}
                            onChange={(e) => handleNestedInputChange("socialLinks", "twitter", e.target.value)}
                            className="flex-1"
                          />
                        ) : (
                          <span className="text-sm text-slate-600 dark:text-slate-300">
                            {userData.socialLinks.twitter}
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm w-20">LinkedIn:</span>
                        {isEditing ? (
                          <Input
                            value={editData.socialLinks.linkedin}
                            onChange={(e) => handleNestedInputChange("socialLinks", "linkedin", e.target.value)}
                            className="flex-1"
                          />
                        ) : (
                          <span className="text-sm text-slate-600 dark:text-slate-300">
                            {userData.socialLinks.linkedin}
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm w-20">GitHub:</span>
                        {isEditing ? (
                          <Input
                            value={editData.socialLinks.github}
                            onChange={(e) => handleNestedInputChange("socialLinks", "github", e.target.value)}
                            className="flex-1"
                          />
                        ) : (
                          <span className="text-sm text-slate-600 dark:text-slate-300">
                            {userData.socialLinks.github}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Activity Tab */}
          <TabsContent value="activity" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Activity className="w-5 h-5" />
                  Recent Activity
                </CardTitle>
                <CardDescription>Your recent actions and achievements</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { action: "Completed project", item: "E-commerce Dashboard", time: "2 hours ago", icon: Star },
                    { action: "Joined team", item: "Frontend Development", time: "1 day ago", icon: Users },
                    { action: "Updated profile", item: "Added new skills", time: "3 days ago", icon: User },
                    { action: "Published article", item: "React Best Practices", time: "1 week ago", icon: Award },
                  ].map((activity, index) => (
                    <div key={index} className="flex items-center gap-4 p-3 rounded-lg bg-slate-50 dark:bg-slate-800">
                      <activity.icon className="w-5 h-5 text-blue-500" />
                      <div className="flex-1">
                        <p className="text-sm font-medium">
                          {activity.action} <span className="text-blue-600 dark:text-blue-400">{activity.item}</span>
                        </p>
                        <p className="text-xs text-slate-500 dark:text-slate-400">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Settings Tab */}
          <TabsContent value="settings" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Bell className="w-5 h-5" />
                    Notifications
                  </CardTitle>
                  <CardDescription>Manage your notification preferences</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Email Notifications</p>
                      <p className="text-sm text-slate-500 dark:text-slate-400">Receive notifications via email</p>
                    </div>
                    <Button variant="outline" size="sm">
                      Configure
                    </Button>
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Push Notifications</p>
                      <p className="text-sm text-slate-500 dark:text-slate-400">Receive push notifications</p>
                    </div>
                    <Button variant="outline" size="sm">
                      Configure
                    </Button>
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">SMS Notifications</p>
                      <p className="text-sm text-slate-500 dark:text-slate-400">Receive notifications via SMS</p>
                    </div>
                    <Button variant="outline" size="sm">
                      Configure
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="w-5 h-5" />
                    Privacy & Security
                  </CardTitle>
                  <CardDescription>Manage your privacy and security settings</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Profile Visibility</p>
                      <p className="text-sm text-slate-500 dark:text-slate-400">Control who can see your profile</p>
                    </div>
                    <Select defaultValue="public">
                      <SelectTrigger className="w-32">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="public">Public</SelectItem>
                        <SelectItem value="friends">Friends</SelectItem>
                        <SelectItem value="private">Private</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Two-Factor Authentication</p>
                      <p className="text-sm text-slate-500 dark:text-slate-400">Add an extra layer of security</p>
                    </div>
                    <Button variant="outline" size="sm">
                      Enable
                    </Button>
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Change Password</p>
                      <p className="text-sm text-slate-500 dark:text-slate-400">Update your account password</p>
                    </div>
                    <Button variant="outline" size="sm">
                      Change
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
