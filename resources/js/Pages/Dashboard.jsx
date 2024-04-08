import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { useForm } from "@inertiajs/react";

export default function Dashboard({ auth, userList }) {
    const { data, setData, post, errors } = useForm({
        selectedIndex: 0,
    });

    const submit = (e) => {
        e.preventDefault();
        post(route("voteSubmit"));
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="overflow-x-auto">
                            <table className="min-w-full divide-y-2 divide-gray-200 text-sm">
                                <thead className="ltr:text-left rtl:text-right text-left">
                                    <tr>
                                        <th className="whitespace-nowrap px-4 py-2 font-medium text-white">
                                            User ID
                                        </th>
                                        <th className="whitespace-nowrap px-4 py-2 font-medium text-white">
                                            Name
                                        </th>
                                        <th className="whitespace-nowrap px-4 py-2 font-medium text-white">
                                            E-mail
                                        </th>
                                        <th className="px-4 py-2"></th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-white">
                                    {userList.map((user, i) => (
                                        <tr key={i}>
                                            <td className="whitespace-nowrap px-4 py-2 font-medium text-white">
                                                {user.userID}
                                            </td>
                                            <td className="whitespace-nowrap px-4 py-2 text-white">
                                                {user.username}
                                            </td>
                                            <td className="whitespace-nowrap px-4 py-2 text-white">
                                                {user.email}
                                            </td>
                                            <td className="whitespace-nowrap px-4 py-2">
                                                <a
                                                    href="#"
                                                    className="inline-block rounded bg-red-600 px-4 py-2 text-xs font-medium text-white hover:bg-red-700"
                                                    onClick={() =>
                                                        setData(
                                                            "selectedIndex",
                                                            selectedIndex
                                                        )
                                                    }
                                                >
                                                    Delete
                                                </a>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
