import { UserButton } from "@clerk/nextjs";

export default function Home() {
    return (
        <div>
            {/* Navbar */}
            <nav className="flex justify-between">
                <p>Home</p>
                <UserButton />
            </nav>
        </div>
    );
}
