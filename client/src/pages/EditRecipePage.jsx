import { useParams } from "react-router";
import EditRecipeView from "../views/EditRecipeView";

function EditRecipePage() {
	const { recipeid } = useParams();
	return (
		<div>
			<EditRecipeView {...{ recipeid }} />
		</div>
	);
}

export default EditRecipePage;
