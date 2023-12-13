import TitledElement from "@/components/custom/TitledElement";

export default function WorkInfo() {
    return (
      <ul>
        <TitledElement title="DEVELOPER" href="#">
          NextJS/React/Angular (Web - Frontend)
				</TitledElement>
				<TitledElement title="DEVELOPER" href="#">
					Rust Tokio/Diesel (Backend)
				</TitledElement>
        <TitledElement title="DEVELOPER" href="#">
          Rust Solana Native/Anchor Lang (Blockchain)
        </TitledElement>
				<TitledElement title="DEVOPS" href="#">
					Alpine Linux/Docker Compose/Longhorn/K3s/K8s
				</TitledElement>
      </ul>
    );
}