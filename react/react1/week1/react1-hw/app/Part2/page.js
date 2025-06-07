// Part2-5
function ButtonComponent() {
  return <button className="btn btn-primary">Button1</button>;
}

function DangerButton() {
  return <button className="btn btn-primary danger-button">dangerous</button>;
}

function TextInput() {
  return <textinput>Type something here</textinput>;
}

function ProfileImage() {
  return (
    <img
      src="https://thumbs.dreamstime.com/b/generic-person-gray-photo-placeholder-man-silhouette-white-background-144511705.jpg?w=68"
      alt="Profile image"
    ></img>
  );
}

// part2-6

export default function Home() {
  return (
    <>
      <ButtonComponent />
      <DangerButton />
      <TextInput />
      <ProfileImage />
    </>
  );
}
