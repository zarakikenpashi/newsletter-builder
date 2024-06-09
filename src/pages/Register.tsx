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

export default function Register() {
  const { setCurrentUser, setUserToken } = useStateContext();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log("Form submitted")
    const data = {
      name:username,
      email,
      password,
      password_confirmation:confirmPassword
    }
    console.log(data)
      axios
      .post('/register', data)
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
            <CardTitle className="text-xl">S'inscrire</CardTitle>
            <CardDescription>
              Entrez vos informations pour créer un compte
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              <div className="grid gap-2">
                  <Label htmlFor="first-name">Nom utilisateur</Label>
                  <Input 
                    id="first-name" 
                    name="username"
                    placeholder="Max" 
                    required 
                    value={username} 
                    onChange={(e) => setUsername(e.target.value)} 
                  />

              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="m@example.com"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="password">Mot de passe</Label>
                  <Input 
                    type="password" 
                    id="password" 
                    name="password"
                    required 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="confirmPassword">Confirmer mot de passe</Label>
                  <Input 
                    type="password" 
                    id="confirmPassword"  
                    name="confirmPassword"
                    required 
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </div>
              </div>
              <Button type="submit" className="w-full">
                Créer un compte
              </Button>
            </div>
            <div className="mt-4 text-center text-sm">
              Vous avez déjà un compte?{" "}
              <Link to="/auth/login" className="underline">
                Se connecter
              </Link>
            </div>
        </CardContent>
      </Card>
    </form>
  )
}
    


