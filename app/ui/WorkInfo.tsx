import TitledElement from "@/components/custom/TitledElement";

export default function WorkInfo() {
    return (
      <ul>
        <TitledElement title="SENIOR DEVELOPER" href="#">
          NextJS/React/Angular (Web - Frontend)
				</TitledElement>
				<TitledElement title="SENIOR DEVELOPER" href="#">
					Rust Tokio/Diesel (Backend)
				</TitledElement>
        <TitledElement title="JUNIOR DEVELOPER" href="#">
          Rust Solana Native/Anchor Lang (Blockchain)
        </TitledElement>
				<TitledElement title="DEVOPS" href="#">
					Alpine Linux/Docker Compose/K8s/ArgoCD (Deployment)
				</TitledElement>
      </ul>
    );
}