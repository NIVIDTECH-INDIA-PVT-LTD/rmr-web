"use client";

import { useState } from "react";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import { EditorState, convertToRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";
import { ArrowLeft } from "lucide-react";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import AdminLayout from "@/components/layouts/AdminLayout";
import axios from "axios";

const Editor = dynamic(
	() => import("react-draft-wysiwyg").then((mod) => mod.Editor),
	{
		ssr: false,
	}
);

export default function AddReport() {
	const router = useRouter();

	const [title, setTitle] = useState("");
	const [reportId, setReportId] = useState("");
	const [year, setYear] = useState("");
	const [featured, setFeatured] = useState(false);
	const [tabOneEditorState, setTabOneEditorState] = useState(
		EditorState.createEmpty()
	);
	const [tabTwoEditorState, setTabTwoEditorState] = useState(
		EditorState.createEmpty()
	);

	const [error, setError] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();
		setError("");

		const tabOneHtml = draftToHtml(
			convertToRaw(tabOneEditorState.getCurrentContent())
		);
		const tabTwoHtml = draftToHtml(
			convertToRaw(tabTwoEditorState.getCurrentContent())
		);

		const newReport = {
			publishedDate: new Date().toISOString().slice(0, 10),
			title,
			year,
			reportId,
			tabOne: tabOneHtml,
			tabTwo: tabTwoHtml,
			featured,
		};

		try {
			await axios.post("/api/reports", newReport);
			router.push("/reports");
		} catch (err) {
			if (err.response && err.response.status === 409) {
				setError("A report with this title already exists.");
			} else {
				setError("Failed to save report.");
			}
		}
	};

	return (
		<AdminLayout>
			<div className="h-[90%] max-h-screen overflow-y-auto pb-10">

				<div className="w-full mx-auto bg-white shadow rounded-lg p-6">
					<div className="flex items-center gap-2 mb-6">
						<button
							onClick={() => router.back()}
							className="p-1 hover:bg-gray-100 cursor-pointer bg-gray-300 rounded-full"
						>
							<ArrowLeft className="w-5 h-5 text-gray-700" />
						</button>
						<h1 className="text-2xl font-bold text-black">Add Report</h1>
					</div>

					<form onSubmit={handleSubmit} className="space-y-4">
						{error && (
							<div className="text-red-600 font-semibold mb-2">{error}</div>
						)}
						<div>
							<label className="block text-black font-medium mb-1">Report Title</label>
							<input
								type="text"
								value={title}
								onChange={(e) => setTitle(e.target.value)}
								className="w-full border border-gray-200 px-4 py-2 rounded-md text-black"
								placeholder="Enter title"
								required
							/>
						</div>

						<div className="flex items-center gap-4">
							<label className="font-medium text-black">Featured:</label>
							<button
								type="button"
								onClick={() => setFeatured(!featured)}
								className={`w-14 h-7 flex items-center text-black rounded-full px-1 transition ${featured ? "bg-green-500" : "bg-gray-300"
									}`}
							>
								<div
									className={`bg-white w-5 text-black h-5 rounded-full shadow-md transform transition-transform ${featured ? "translate-x-7" : "translate-x-0"
										}`}
								/>
							</button>
							<span>{featured ? "Yes" : "No"}</span>
						</div>

						<div>
							<label className="block font-medium mb-1">Select Year</label>
							<select
								value={year}
								onChange={(e) => setYear(e.target.value)}
								className="w-full border border-gray-200 cursor-pointer px-4 py-2 text-black rounded-md"
								required
							>
								<option value="">-- Select Year --</option>
								{Array.from({ length: 10 }, (_, i) => {
									const y = new Date().getFullYear() - i;
									return (
										<option key={y} value={y}>
											{y}
										</option>
									);
								})}
							</select>
						</div>

						<div>
							<label className="block font-medium mb-1">Report ID</label>
							<input
								type="text"
								value={reportId}
								onChange={(e) => setReportId(e.target.value)}
								className="w-full border border-gray-200 text-black px-4 py-2 rounded-md"
								placeholder="e.g., RPT001"
								required
							/>
						</div>

						<div className="space-y-6">
							<div>
								<label className="block text-sm font-semibold text-gray-700 mb-1">
									Tab One
								</label>
								<div className="border border-gray-300 rounded-lg shadow-sm">
									<Editor
										editorState={tabOneEditorState}
										onEditorStateChange={setTabOneEditorState}
										wrapperClassName="rounded-lg"
										editorClassName="p-4 min-h-[150px]"
										toolbarClassName="border-b text-black border-gray-200 px-2"
									/>
								</div>
							</div>

							<div>
								<label className="block text-sm font-semibold text-gray-700 mb-1">
									Tab Two
								</label>
								<div className="border border-gray-300 rounded-lg shadow-sm">
									<Editor
										editorState={tabTwoEditorState}
										onEditorStateChange={setTabTwoEditorState}
										wrapperClassName="rounded-lg"
										editorClassName="p-4 min-h-[150px]"
										toolbarClassName="border-b text-black border-gray-200 px-2"
									/>
								</div>
							</div>
						</div>

						<div className="pt-4">
							<button
								type="submit"
								className="bg-blue-600 cursor-pointer text-white px-5 py-2 rounded-md hover:bg-blue-700 transition"
							>
								Submit
							</button>
						</div>
					</form>
				</div>
			</div>
		</AdminLayout>
	);
}
