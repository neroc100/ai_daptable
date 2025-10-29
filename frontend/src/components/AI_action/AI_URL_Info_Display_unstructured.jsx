import React from 'react';
import { useUrlCounter } from '../../context/UrlCounterContext';
import { getUrlConfig } from '../../composables/getURLconfig';

function AI_URL_Info_Display_unstructured({ isAnalysisDisplayed = false }) {
  const { currentUrl } = useUrlCounter();
  const config = getUrlConfig(currentUrl);

  // Flatten all features from all categories
  const allFeatures = [
    ...config.urlStringAnalysis.features,
    ...config.domainCharacteristics.features,
    ...config.dnsNetwork.features,
    ...config.encryptionHttp.features,
    ...config.webpageContent.features,
    ...config.geographicalHosting.features,
  ];

 return (
    <div
      className="w-full rounded-2xl p-3 bg-white transition-all duration-300 ease-in-out shadow-sm hover:shadow-md"
    >
      <ul className="space-y-1.5">
        {allFeatures.map((feature, i) => (
          <li
            key={i}
            className="px-2 py-1.5 rounded-lg flex items-center justify-between transition-colors duration-200 hover:bg-gray-50"
          >
            {typeof feature === 'object' ? (
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between w-full">
                <span className="font-medium text-sm text-gray-900 truncate">
                  {feature.name}
                </span>
                {feature.value && (
                  <span className="text-xs text-gray-500 mt-0.5 sm:mt-0 sm:ml-2 truncate">
                    {feature.value}
                  </span>
                )}
              </div>
            ) : (
              <span className="text-sm text-gray-900">{feature}</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AI_URL_Info_Display_unstructured;
