interface Props {

    open: boolean;

    title: string;

    message: string;

    onConfirm: () => void;

    onCancel: () => void;

}

export default function ConfirmDialog({

    open,

    title,

    message,

    onConfirm,

    onCancel,

}: Props) {

    if (!open) return null;

    return (

        <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">

            <div className="bg-white rounded-xl p-6 w-[400px] shadow-xl">

                <h2 className="text-xl font-bold text-gray-600 mb-3">

                    {title}

                </h2>

                <p className="text-gray-600">

                    {message}

                </p>

                <div className="flex justify-end gap-3 mt-6">

                    <button

                        onClick={onCancel}

                        className="px-4 py-2 rounded-lg border text-gray-400"

                    >

                        Cancelar

                    </button>

                    <button

                        onClick={onConfirm}

                        className="bg-red-600 text-white px-4 py-2 rounded-lg"

                    >

                        Eliminar

                    </button>

                </div>

            </div>

        </div>

    );

}