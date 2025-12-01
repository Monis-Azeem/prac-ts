import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardAction, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { IconDownload, IconUpload, IconX } from '@tabler/icons-react'
import { Controller, useForm } from "react-hook-form"
import { Input } from "@/components/ui/input"
import { z } from 'zod'
import { schema } from "@/schema"
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ItemText, SelectLabel } from "@radix-ui/react-select"
import { zodResolver } from "@hookform/resolvers/zod"
import { ItemGroup, Item, ItemTitle, ItemActions } from "@/components/ui/item"
import { useState } from "react"

type FormFields = z.infer<typeof schema>

export default function New() {

    let arr = ['Hello', 'New']

    const [array, useArray] = useState(arr)

    const handleRemove = (idx: number) => {
    useArray(arr)
}

    const { control } = useForm<FormFields>({
        resolver: zodResolver(schema),
    })
    return (
        <>
            <form className="p-15">

                <div className="flex justify-between">
                    <div>
                        <h1 className="font-semibold">Business Profile</h1>
                        <p>Manage your business information that customers will see</p>
                    </div>
                    <Button type="submit">Save Changes</Button>
                </div>

                <Card className="w-full mt-6">
                    <CardHeader>
                        <CardTitle>Customer QR Code</CardTitle>
                        <CardDescription>Generate and share your QR code for customers to sign up directly to your cafe
                        </CardDescription>
                    </CardHeader>
                </Card>

                <Card className="mt-5">
                    <CardHeader>
                        <CardTitle>Business Photo</CardTitle>
                        <CardDescription>Upload a photo of your business that customers will see
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="flex">
                        <Image
                            src={'/download.png'}
                            alt="Business Profile Image"
                            width={'50'}
                            height={'50'}
                            className="border-2 border-accent-foreground mr-10"
                        />
                        <div>
                            <Button className="sm"><IconUpload />Change Photo</Button>
                            <p className="text-xs">
                                Max 5MB. JPG, PNG, GIF, or WebP.
                            </p>
                        </div>
                    </CardContent>
                </Card>
                <Card className="w-full mt-6">
                    <CardHeader>
                        <CardTitle>Customer QR Code</CardTitle>
                        <CardDescription>Generate and share your QR code for customers to sign up directly to your cafe
                        </CardDescription>
                    </CardHeader>
                </Card>
                <Card className="w-full mt-6">
                    <CardHeader>
                        <CardTitle>Business Details</CardTitle>
                        <CardDescription>Additional information about your business
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="grid grid-cols-2 gap-x-7">
                            <div>
                                <label htmlFor="numberOfLocations" className="text-sm text-stone-700">Number Of Locations</label>
                                <Controller
                                    render={({ field }) => <Input {...field} className="mt-1" type="number" />}
                                    name='numberOfLocations'
                                    control={control}
                                />
                            </div>
                            <div>

                                <label htmlFor="avgWaitTime" className="text-sm text-stone-700">Average Wait Time</label>
                                <Controller
                                    render={({ field }) => <Input {...field} className="mt-1" type="number" />}
                                    name='avgWaitTime'
                                    control={control}
                                />
                            </div>
                        </div>
                    </CardContent>
                </Card>
                <Card className="w-full mt-6">
                    <CardHeader>
                        <CardTitle>Basic Information</CardTitle>
                        <CardDescription>Essential business details
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <label htmlFor="businessType" className="text-sm">Business Type</label>
                        <Controller 
                        render={({field}) => 
                        <Select {...field}> 
                            <SelectTrigger className="w-[180px]">
                                <SelectValue placeholder='Business Type'/>
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>

                                <SelectLabel className="text-xs m-1 text-stone-400">Business Type</SelectLabel>
                                <SelectItem value="Cafe">Cafe</SelectItem>
                                <SelectItem value="Restaurant">Restaurant</SelectItem>
                                <SelectItem value="Bakery">Bakery</SelectItem>
                                <SelectItem value="Coffee Shop">Coffee Shop</SelectItem>
                                <SelectItem value="Tea House">Tea House</SelectItem>
                                <SelectItem value="Others">Others</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>}
                    control={control}
                    name="businessType"    
                        />
                    </CardContent>
                </Card>
                <Card className="w-full mt-6">
                    <CardHeader>
                        <CardTitle>Popular Items</CardTitle>
                        <CardDescription>Highlight your most popular menu items or products
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ItemGroup className="flex">
                            {array.map((item, idx) => (
                                <Item key={idx}>
                                    <Button variant='outline' size='sm' onClick={() => handleRemove(idx)} key={idx} type='button'>
                                        <IconX/>
                                        {item}</Button>
                                </Item>
                            ))}

                        </ItemGroup>
                    </CardContent>
                </Card>
                <Card className="w-full mt-6">
                    <CardHeader>
                        <CardTitle>Customer QR Code</CardTitle>
                        <CardDescription>Generate and share your QR code for customers to sign up directly to your cafe
                        </CardDescription>
                    </CardHeader>
                </Card>
                <Card className="w-full mt-6">
                    <CardHeader>
                        <CardTitle>Customer QR Code</CardTitle>
                        <CardDescription>Generate and share your QR code for customers to sign up directly to your cafe
                        </CardDescription>
                    </CardHeader>
                </Card>
            </form>
        </>
    )

}

