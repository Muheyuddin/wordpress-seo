import { useDispatch, useSelect } from "@wordpress/data";
import { useMemo } from "@wordpress/element";
import { AiGenerateTitlesAndDescriptionsUpsell } from "../../shared-admin/components";

const STORE = "yoast-seo/editor";

/**
 * @returns {JSX.Element} The element.
 */
export const ModalContent = () => {
	const learnMoreLink = useSelect( select => select( STORE ).selectLink( "https://www.yoa.st/ai-generator-learn-more" ), [] );
	const upsellLink = useSelect( select => select( STORE ).selectLink( "https://yoa.st/ai-generator-upsell" ), [] );

	const imageLink = useSelect( select => select( STORE ).selectImageLink( "ai-generator-preview.png" ), [] );
	const thumbnail = useMemo( () => ( {
		src: imageLink,
		width: "432",
		height: "244",
	} ), [ imageLink ] );

	const value = useSelect( select => select( STORE ).selectWistiaEmbedPermissionValue(), [] );
	const status = useSelect( select => select( STORE ).selectWistiaEmbedPermissionStatus(), [] );
	const { setWistiaEmbedPermission: set } = useDispatch( STORE );
	const wistiaEmbedPermission = useMemo( () => ( { value, status, set } ), [ value, status, set ] );

	return (
		<AiGenerateTitlesAndDescriptionsUpsell
			learnMoreLink={ learnMoreLink }
			upsellLink={ upsellLink }
			thumbnail={ thumbnail }
			wistiaEmbedPermission={ wistiaEmbedPermission }
		/>
	);
};
