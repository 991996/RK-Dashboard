// eslint-disable-next-line no-unused-vars
export default function NavIcon({ icon: Icon }) {
  return (
    <div
      className="text-gray-500 dark:text-gray-300
     dark:hover:text-primary-red hover:text-primary-red
      duration-300 cursor-pointer"
    >
      <Icon size={24} />
    </div>
  );
}
