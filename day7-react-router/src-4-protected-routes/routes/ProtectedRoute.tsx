import { ReactElement } from "react";
import { Navigate } from "react-router-dom";
import { User } from "../user.types"

type PropsType = {
    user: User | null;
    children: ReactElement
}

export default function ProtectedRoute({ user, children }: PropsType) {
    if (!user) {
        return <Navigate to="/login" replace />
    }
    return children;
}
