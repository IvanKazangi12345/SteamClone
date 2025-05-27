import '../components/createAccComponents/createAccPage.css'
import { CreateAcc } from '../components/createAccComponents/CreateAccComponent'
import { CreateaccData } from '../components/createAccComponents/CreateAccComponent'

export function CreateAccPage() {
    return (
        <div>
            {CreateaccData.map((crt, idx) => (
                <div key={idx}>
                    <CreateAcc {...crt} />
                </div>
            ))}
        </div>
    )
}