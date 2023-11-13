import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";

export default function NewsDialog({
  isOpen,
  closeModal,
  date,
  title,
  content,
  imgUrl,
  otherImgUrl,
}) {

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
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
                <Dialog.Panel className="max-w-[1400px] transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="flex justify-between items-center mb-2"
                  >
                    <div className="text-text-primary text-[32px] font-bold max-sm:text-2xl">
                      過去回顧
                    </div>
                    <div className="cursor-pointer" onClick={closeModal}>
                      <img
                        src="./images/cancel.png"
                        alt="cancel"
                        className="max-sm:w-[24px]"
                      />
                    </div>
                  </Dialog.Title>
                  <div className="flex justify-center max-md:flex-col">
                    <div>
                      <div>
                        <img src={imgUrl} alt="news" className="w-[507px] rounded-2xl" />
                      </div>
                    </div>
                    <div className="mx-4 max-sm:mx-0">
                      <div>
                        <div className="text-primary-theme-one text-[32px] max-sm:text-[24px] font-bold">
                          {title}
                        </div>
                        <span className="text-text-secondary text-sm">
                          {date}
                        </span>
                        <div className="text-text-primary mt-8">{content}</div>
                      </div>
                      <div className="bg-gray-100 mt-12 p-4 rounded-xl">
                        <div className="text-text-primary font-semibold mb-2">
                          更多回顧
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                          {otherImgUrl
                            .map((others,index) => (
                              <div key={index}>
                                <div>
                                  <img
                                    src={others.imgUrl}
                                    alt="news"
                                    className="w-[244px] h-[200px] object-cover rounded-2xl"
                                  />
                                </div>
                              </div>
                            ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
