import React, { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import './Modal.css'
import { BsFillExclamationTriangleFill } from 'react-icons/bs'

function Modal({ src, link, state, closeModal }) {
	return (
		<Transition appear show={state} as={Fragment}>
			<Dialog as="div" className="relative z-10" onClose={closeModal}>
				<div className="fixed inset-0 bg-black/75" aria-hidden="true" /> 
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
									<BsFillExclamationTriangleFill className='triangle' />
									<p className='modal-text-1'><b>Vergi Hukukunun Unsurları ve İdari Davalar</b> adlı blog gönderinizi silmek istediğinizden emin misiniz?</p>
									<p className='modal-text-2'>Bu işlemin geri dönüşü yoktur.</p>
									<button className='btn-no' onClick={closeModal}><u>Hayır, istemiyorum</u></button>
									<button className='btn-yes'>Evet, sil.</button>
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