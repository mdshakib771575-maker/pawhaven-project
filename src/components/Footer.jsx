import Link from "next/link";

const Footer = () => {
    return (
        <footer className="bg-black text-gray-400 px-6 md:px-16 py-16 mt-5">
            <div className="max-w-7xl mx-auto">
                <div className="mb-12">
                    <h1 className="text-6xl md:text-7xl font-bold text-white">
                     PawHaven
                    </h1>
                    <p className="mt-4 max-w-xl">
                        Find your perfect furry friend and give them
            a safe, loving home. Adopt pets easily and
            change a life forever.
                    </p>
                </div>

                {/* Grid Section */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
                    {/* Newsletter */}


                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white mb-3 tracking-wide">QUICK LINKS</h3>
                        <ul className="space-y-2">
                            <Link href={"/"}><li className="hover:text-white cursor-pointer">Home</li></Link>
                            <Link href={"all-pets"}><li className="hover:text-white cursor-pointer">AllPets</li></Link>
                            <Link href={'my-request'}><li className="hover:text-white cursor-pointer">My Request</li></Link>
                            <Link href={''}><li className="hover:text-white cursor-pointer">My Profile</li></Link>
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h3 className="text-white mb-3 tracking-wide">SUPPORT</h3>
                        <ul className="space-y-2">
                            <li className="hover:text-white cursor-pointer">Help Center</li>
                            <li className="hover:text-white cursor-pointer">
                                Terms of Service
                            </li>
                            <li className="hover:text-white cursor-pointer">
                                Privacy Policy
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-white mb-3 tracking-wide">CONTACT US</h3>
                        <ul className="space-y-2">
                            <li>786 901 1622</li>
                            <li>info@pawhaven.com</li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="border-t border-gray-800 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-sm">
                        © 2026 pawhaven. All rights reserved.
                    </p>

                    <div className="flex gap-5 mt-4 md:mt-0 text-white text-lg">
                        <span className="cursor-pointer">X</span>
                        <span className="cursor-pointer">in</span>
                        <span className="cursor-pointer">◎</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;