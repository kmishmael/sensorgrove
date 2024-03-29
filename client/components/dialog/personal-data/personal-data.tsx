"use client";
import * as Dialog from "@radix-ui/react-dialog";

export default function PersonalDataDialog() {
  return (
    <>
      <Dialog.Root>
        <Dialog.Trigger asChild>
          <button>Edit profile</button>
        </Dialog.Trigger>

        <Dialog.Portal>
          <Dialog.Overlay className="w-screen h-screen fixed inset-0 bg-gray-300">
            <Dialog.Content className="flex bg-red">
              <Dialog.Title>Edit profile</Dialog.Title>
              <Dialog.Description>
                Make changes to your profile.
              </Dialog.Description>
            </Dialog.Content>
          </Dialog.Overlay>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  );
}
