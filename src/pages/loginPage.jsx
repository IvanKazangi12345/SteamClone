import '../components/loginPageComponents/loginPage.css'
import { LoginPage } from '../components/loginPageComponents/loginPageComponent'
import { LoginPageData } from '../components/loginPageComponents/loginPageComponent'

export function Login() {
    return (
        <div>
            {LoginPageData.map((lgn, idx) => (
                <div key={idx}>
                    <LoginPage {...lgn} />
                </div>
            ))}
        </div>
    )
}

