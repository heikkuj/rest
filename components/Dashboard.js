'use client'

import Header from "./Header";
import { Card, CardContent, CardHeader } from './ui/card';
import Greeting from './Greeting';
import Profile from './Profile'

export default function Dashboard() {
    return (
        <div>
            <Header />
            <div className='flex flex-col m-[20px] p-[20px]'>
                <Card className='h-auto mb-10 bg-orange-400'>

                    <CardHeader className="font-coiny text-xl">
                        <Greeting />
                    </CardHeader>

                    <CardContent className="px-1">
                        <Profile />
                    </CardContent>
                </Card>

            </div>
        </div>
    )
}