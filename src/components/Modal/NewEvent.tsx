import BaseModal from "./BaseModal";

export default function NewEvent({ children }: { children: React.ReactNode }) {
  return (
    <BaseModal title="New Event" target={children}>
        <p>Modal Content</p>
    </BaseModal>
  );
}