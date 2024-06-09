import axios from "@/axios/axios"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useStateContext } from "@/store/ContextProvider"
import { useState } from "react"
import { Link } from "react-router-dom"

export default function Login() {
  const { setCurrentUser, setUserToken } = useStateContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log("Form submitted")
    const data = {
      email,
      password
    }
    console.log(data)
      axios
      .post('/login', data)
      .then(({ data }) => {
        console.log(data);
        setCurrentUser(data.user)
        setUserToken(data.token)
      })
      .catch((error) => {
        console.error(error)
      })
  }

  return (
    <form onSubmit={handleSubmit}>
      <Card className="mx-auto max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl">Se connecter</CardTitle>
          <CardDescription>
            Entrez votre email pour accéder à votre compte
          </CardDescription>
          </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Mot de passe</Label>
                <Link to="#" className="ml-auto inline-block text-sm underline">
                  Mot de passe oublié?
                </Link>
              </div>
              <Input 
                id="password" 
                type="password" 
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <Button type="submit" className="w-full">
              Se connecter
            </Button>
          </div>
          <div className="mt-4 text-center text-sm">
            Vous n&apos;avez pas de compte?{" "}
            <Link to="/auth/register" className="underline">
              Inscrivez-vous
            </Link>
          </div>
        </CardContent>
    </Card>
  </form>
  )
}
