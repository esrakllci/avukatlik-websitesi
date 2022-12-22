import React, { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { AiOutlineClose } from 'react-icons/ai'
import './ModalUpdate.css'
import { BsFillExclamationTriangleFill } from 'react-icons/bs'

// headlessui kütüphanesinden kullandığımız Modal: https://headlessui.com/react/dialog
// fonksiyonumuzun almış olduğu ilk 2 parametre src ve link açılacak modalın resmi ve linki için diğerleri ise hangi buttona bastığımızda hangi modalın açılacağı ve kapanacağı içindir

function Modal({ src, link, state, closeModal }) {
	return (
		<Transition appear show={state} as={Fragment}>
			<Dialog as="div" className="relative z-10" onClose={closeModal}>
				<div className="fixed inset-0 bg-black/75" aria-hidden="true" /> {/* Modal açıldıktan sonra arka planın ne kadar kararacağı burada belirleniyor */}
				<Transition.Child
					as={Fragment}
					enter="ease-out duration-300"
					enterFrom="opacity-0"
					enterTo="opacity-100"
					leave="ease-in duration-200"
					leaveFrom="opacity-100"
					leaveTo="opacity-0"
				>
					<div className="fixed inset-0 bg-black bg-opacity-25" />
				</Transition.Child>

				<div className="fixed inset-0 overflow-y-auto">
					<div className="flex min-h-full items-center justify-center p-4 text-center">
						<Transition.Child
							as={Fragment}
							enter="ease-out duration-300"
							enterFrom="opacity-0 scale-95"
							enterTo="opacity-100 scale-100"
							leave="ease-in duration-200"
							leaveFrom="opacity-100 scale-100"
							leaveTo="opacity-0 scale-95"
						>
							<Dialog.Panel className="w-full transform overflow-hidden text-center align-middle transition-all open-dialog">
								<div className='p-[28pxs]'>
									<FiCheckCircle className='circle' />
									<p className='modalu-text-1'><b>Vergi Hukukunun Unsurları ve İdari Davalar</b> adlı blog gönderisi başarıyla güncellenmiştir.</p>
									
									
								</div>
							</Dialog.Panel>
						</Transition.Child>
					</div>
				</div>
			</Dialog>
		</Transition>
	)
}

export default Modal