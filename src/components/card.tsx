import * as React from "react"

import Link from "next/link"
import { ModeToggle } from "@/components/ui/toggler"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

export function CardWithForm() {
    return (
        // <div className="flex justify-center items-center h-screen">
            <Card className="w-[350px] relative">
                <CardHeader>
                    <CardTitle>Create project</CardTitle>
                    <CardDescription>Deploy your new project in one-click.</CardDescription>
                </CardHeader>
                <CardContent>
                    <form>
                        <div className="grid w-full items-center gap-4">
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="name">Name</Label>
                                <Input id="name" placeholder="input your name" />
                            </div>
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="name">Email</Label>
                                <Input id="name" placeholder="input your email" />
                            </div>
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="framework">Department</Label>
                                <Select>
                                    <SelectTrigger id="framework">
                                        <SelectValue placeholder="All" />
                                    </SelectTrigger>
                                    <SelectContent position="popper">
                                        <SelectItem value="it">IT</SelectItem>
                                        <SelectItem value="accounting">Accounting</SelectItem>
                                        <SelectItem value="marketing">Marketing</SelectItem>
                                        <SelectItem value="law">Law</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                    </form>
                </CardContent>
                <CardFooter className="flex justify-between">
                    <CardTitle>
                        <Link className="text-sm text-muted-foreground hover:text-muted" href="/admin">open Admin page</Link >
                    </CardTitle>
                    <Button className="capitalize">submit</Button>
                </CardFooter>
            </Card>
        // </div>
    )
}