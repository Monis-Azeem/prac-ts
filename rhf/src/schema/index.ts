import {z} from 'zod'

export const schema = z.object({
    profileLink : z.url().optional(),
    numberOfLocations: z.number().min(1000, 'Please enter number of locations less than 1000').optional(),
    avgWaitTime: z.number().min(120, 'Please enter wait time of less than minutes').optional(),
    businessName: z.string().min(30, 'Please enter business name of less than 30 characters').optional(),
    businessType: z.enum(['Cafe, Restaurant, Bakery, Coffee Shop, Tea House, Others']).optional(),
    businessDescription: z.string().min(100, 'Enter description less than 100 characters').optional(),
    popularItems: z.array(z.string().min(20, 'Please enter string of less than 20 characters')).min(10, 'only ten items allowed').optional(),
    featuresAminities: z.array(z.string().min(20, 'Please enter string of less than 20 characters')).min(10, 'only ten items allowed').optional(),
    operatingHours: z.object({
        openingTime: z.date(),
        closingTime: z.date()
    }).optional(),
    operatingDays: z.enum(['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']).optional(),
})