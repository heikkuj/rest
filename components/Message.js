import React from 'react';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export default function Message() {
  return (
    <Card className='my-5'>
      <CardHeader>
        <CardTitle>Hvorfor må jeg logge inn?</CardTitle>
      </CardHeader>
      <CardContent>
        <p className='mb-2'>Av praktiske og sikkerhetsmessige årsaker blir alle brukere autentisert via e-post. På sikt er planen å gjøre det mulig å bruke siden uten innlogging.</p>
        <p>Beklager for ulempen!</p>
      </CardContent>
    </Card>
  )
}