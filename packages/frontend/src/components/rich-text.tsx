import type {
	SerializedEditorState,
	SerializedLexicalNode,
} from "@payloadcms/richtext-lexical/lexical";
import {
	type JSXConvertersFunction,
	RichText,
} from "@payloadcms/richtext-lexical/react";
import RichTextUpload from "./rich-text-upload";

const jsxConverters: JSXConvertersFunction = ({ defaultConverters }) => ({
	...defaultConverters,
	upload: ({ node }) => {
		return <RichTextUpload node={node} />;
	},
});

export const RichTextComp = ({
	data,
}: { data: SerializedEditorState<SerializedLexicalNode> }) => {
	return <RichText converters={jsxConverters} data={data} />;
};
